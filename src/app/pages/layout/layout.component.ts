import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NgIf, Location } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';

// components
import { HeaderComponent } from '../../feature/header';
import { SidebarComponent } from '../../feature/sidebar';
// service
import { ApiService, AuthService, StorageService } from 'src/app/shared/services';
import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service';
// configs
import { IdTokenRequest } from 'src/app/shared/configs/app.model';
import { LOADER_TEXT } from 'src/app/shared/configs/app.constants';

import { LoaderComponent } from 'fairfood-utils';
import { clientId, clientSecret } from 'src/environments/environment';
import { DataService } from 'src/app/shared/services/data/data.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NgIf,
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    LoaderComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  readonly route = inject(ActivatedRoute);
  readonly authService = inject(AuthService);
  readonly router = inject(Router);
  readonly dashboardService = inject(DashboardService);
  private readonly api = inject(ApiService);
  readonly location = inject(Location);
  readonly storage = inject(StorageService);
  readonly dataService = inject(DataService);

  loadPage = false;
  loaderText = LOADER_TEXT.authText;
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.initToken();
  }

  /**
   * This function makes an API call to get a list of companies, processes the response data, and
   * updates the logo URL and themes accordingly.
   */
  fetchCompanies(): void {
    this.api
      .getCompanies()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.loaderText = LOADER_TEXT.fetchText;
          const apiResponse = res?.results[0];
          const { image } = apiResponse;
          this.authService.logoUrl.next(image);
          this.getThemes(apiResponse);
        },
        error: (err) => {
           (err);
          this.loadPage = true;
        },
      });
  }

  /**
   * The function `getThemes` retrieves theme data based on an ID, updates the title in the input data,
   * sets the updated data in the dashboard service, and sets a flag to indicate that the page has
   * finished loading.*/
  getThemes(data: any): void {
    const { id } = data;
    this.api
      .getThemes(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: any) => {
        const { title, sub_title, description } = res;

        const updatedData = {
          ...data,
          title,
          sub_title: sub_title ?? '',
          description: description ?? '',
        };
        this.dashboardService.setCompaniesData(updatedData);
        this.loadPage = true;
        this.router.navigate(['/dashboard']);
      });
  }

  initToken(): void {
    /**
     * Checking if code exists in the query params.
     * If it exists, it means the user is trying to login.
     * If it doesn't exist, it means the user is already logged in.
     */
    const code = this.route.snapshot.queryParamMap.get('code');

    if (code) {
      const reqObject: IdTokenRequest = {
        code,
        grant_type: 'authorization_code',
        redirect_uri: window.location.origin + '/',
        client_id: clientId,
        client_secret: clientSecret,
      };
      this.authService
        .getIdToken(reqObject)
        .pipe(
          takeUntil(this.destroy$),
          tap((res) => {
            const { access_token, id_token, refresh_token } = res;
            this.authService.setUserData({
              access_token,
              id_token,
              refresh_token,
            });
            this.getCompanyData()
          })
        )
        .subscribe();
    } else {
      this.getCompanyData()
    }
  }

  getCompanyData(): void {
    this.api
      .getCompanyData()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        const { default_company } = res?.data
        this.dataService.setCompanyData(res?.data)
        this.storage.saveInStorage('entityId', default_company);
        this.dashboardService.SelectedCompanyId(default_company);
        this.fetchCompanies();
      },
        (error) => {
          // this.dataLoaded = true;
        });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
