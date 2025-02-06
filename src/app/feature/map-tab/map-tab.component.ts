import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NgFor, TitleCasePipe } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service';

@Component({
  selector: 'app-map-tab',
  standalone: true,
  imports: [NgFor,TitleCasePipe],
  templateUrl: './map-tab.component.html',
  styleUrls: ['./map-tab.component.scss'],
})
export class MapTabComponent implements OnInit, OnDestroy {
  private readonly dashboardService = inject(DashboardService);
  tabs = ['Living income','Emissions'];
  selectedTab = 'DEFORESTATION';
  private destroy$ = new Subject<void>();

  /**
   * The function subscribes to a data stream from a service and assigns the 'pillers' data to the
   * 'tabs' property.
   */
  ngOnInit(): void {
    this.dashboardService.companiesData$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        const { pillers } = data;
        this.tabs = [...pillers,...this.tabs];
      });
      this.subscribeToSelectedTab();
  }

  subscribeToSelectedTab(): void {
    this.dashboardService
      .selectedTab$()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.selectedTab = data;

      });
  }

  /**
   * The `tabSelected` function updates the selected tab and calls a service to update the selected
   * tab.
   **/
  tabSelected(item: string) {
    this.selectedTab = item;
    this.dashboardService.updateSelectedTab(this.selectedTab);
    this.dashboardService.setUnit(1);
  }

  /**
   * The ngOnDestroy function in TypeScript unsubscribes from all subscriptions in the subscriptions
   * array.
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
