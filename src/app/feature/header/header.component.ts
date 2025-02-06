import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, NgClass, NgFor, NgIf, SlicePipe } from '@angular/common';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ButtonsComponent } from 'fairfood-utils';
import { ApiService, AuthService } from 'src/app/shared/services';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AvatarPipe } from './header.pipe';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { DataService } from 'src/app/shared/services/data/data.service';
import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service';
import { Company, IUserData } from 'src/app/shared/configs/app.model';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, AsyncPipe, ButtonsComponent, MatIconModule, MatMenuModule, AvatarPipe, SlicePipe, NgClass, NgFor, FormsModule, MatRadioModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private readonly auth = inject(AuthService);
  private readonly dataService = inject(DataService)
  private readonly dashboardService = inject(DashboardService)
  logoUrl$: Observable<string>;

  selectedCompanyId = ''
  companyList: Company[] = []
  userData: IUserData
  selectedCompany: any

  constructor() {
    this.logoUrl$ = this.auth.logoUrl;
  }

  ngOnInit(): void {
    // this.getCompanyData()
    this.getData()
  }

  getData(): any {
    const data = this.dataService.getCompanyData()
    let { companies, ...newData } = data;
    this.companyList = companies
    this.userData = newData
    this.selectedCompanyId = newData?.default_company
    this.selectedCompany = companies.find((item: any) => item.id == this.selectedCompanyId)
  }

  changeCompany(id: any): void {
    this.dashboardService.SelectedCompanyId(id);
  }

  trackById(index: number, item: any): any {
    return item.id;
  }

  logout(): void {
    this.auth.removeUserData();
  }
}
