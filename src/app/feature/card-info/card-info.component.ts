  import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
  import { MatIconModule } from '@angular/material/icon';
  import { CommonModule } from '@angular/common';
  import { Subject, Subscription, takeUntil } from 'rxjs';

  import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service';
  import { FfPaginationComponent, IPaginator, LoaderComponent } from 'fairfood-utils';
  import { MatTooltipModule } from '@angular/material/tooltip';
  import { PriceGapComponent } from "./price-gap/price-gap.component";
  import { ApiService } from 'src/app/shared/services/api.service';
  import { DataService } from 'src/app/shared/services/data/data.service';
import { IAcceptableData, IAssessmentData, IBatches, IFilters, IImpactData, IResultData, ISupplychainData, ITableStats } from 'src/app/shared/configs/app.model';

  const pageLimit = 3;

  @Component({
    selector: 'app-card-info',
    standalone: true,
    imports: [
      CommonModule,
      MatIconModule,
      FfPaginationComponent,
      MatTooltipModule,
      PriceGapComponent,
      LoaderComponent
    ],
    templateUrl: './card-info.component.html',
    styleUrls: ['./card-info.component.scss'],
  })
  export class CardInfoComponent implements OnInit, OnDestroy {
    @Input() supplyChainData: ISupplychainData = [];
    @Input() batchData: IBatches = [];
    @Input() selectedSupplychain: any
    @Input() resultData: IResultData
    @Input() livingIncomeData: IAssessmentData;
    @Input() data: IImpactData;

    private destroy$ = new Subject<void>();
    private readonly dashboardService = inject(DashboardService);
    private readonly api = inject(ApiService);
    private readonly dataService = inject(DataService)

    tableStats: IAssessmentData;
    tableStatsArray: ITableStats;
    tableCurrentPage = 1;
    acceptableCount = 0;
    nonAcceptableCount = 0;
    dataLoaded = false;
    isPassed: boolean;
    selectedTab: string;


    // data: any;

    cardData: IImpactData;
    acceptableData: IAcceptableData;
    cardOffset = 0;
    resetpaginationAcceptable = { limit: 3, offset: 0 };
    private unitSub: Subscription;
    unit: number

    selectedFilters: IFilters;
    selectedSupplyChain: any;
    selectedBatch: any;
      pageLimit: number;

    constructor() { }

    /**
     * The `ngOnInit` function retrieves dashboard data from an API, processes it, and sets various
     * properties for display.
     */
    ngOnInit(): void {
      this.subscribeToDashboardFilters();
      this.unitSub = this.dashboardService.meanOrMedian$.subscribe((value) => {
        this.unit = value;
      });
      this.subscribeToSelectedTab();
    }

    subscribeToDashboardFilters(): void {
      this.dashboardService
        .selectedFilters$()
        .pipe(takeUntil(this.destroy$))
        .subscribe((data) => {
          this.selectedFilters = data;
          this.selectedSupplyChain = this.supplyChainData.find(
            (f) => f.id === this.selectedFilters.supplychain
          );
          this.selectedBatch = this.batchData.find(
            (batch) => batch.id === this.selectedFilters.batch
          );

          this.subscribeToSelectedTab();
          // this.loadStats(); 
        });
    }
    subscribeToSelectedTab(): void {
      this.dashboardService
        .selectedTab$()
        .pipe(takeUntil(this.destroy$))
        .subscribe(this.onTabSelected.bind(this));
    }

    onTabSelected(data: any): void {
      this.selectedTab = data;
      if (this.selectedTab != 'DEFORESTATION') {
        this.tableStats = this.livingIncomeData
        this.onStatsLoaded(this.tableStats)
      }
      if (this.selectedFilters) {
        this.loadStats();
      }
    }

    /**
     * The function `loadStats` makes an API call to retrieve stats based on the selected tab and
     * subscribes to the response to trigger the `onStatsLoaded` method.
     */
    loadStats(): void {
      if (this.selectedTab == 'DEFORESTATION') {
        this.dataLoaded = false;
        this.api
          .getStats(this.selectedTab, this.selectedFilters)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: this.onStatsLoaded.bind(this),
            error: () => {
              this.dataLoaded = true;
            },
          });
      }
    }


    onStatsLoaded(res: any): void {

      // this.tableStats = []
      if (res?.data) {
        const { data } = res;
        this.tableStats = data;
      }
      else {
        this.tableStats = res;
      }
      this.dataService.setData(this.tableStats?.indexes)
      if (this.tableStats?.indexes?.length > 3) {
        this.tableStatsArray = this.tableStats?.indexes.slice(0, pageLimit);
      }
      else {
        this.tableStatsArray = this.tableStats?.indexes
      }
      this.tableCurrentPage = 1;
      if (this.data && Object.keys(this.data).length > 0) {
        this.cardData = this.data.slice(0, 1);
        this.acceptableData = this.data[0]?.indexes.slice(0, 3);
        this.setCardData();
      }
      this.dataLoaded = true;
    }

    /**
     * The pagination function
     **/
    pagination(data: IPaginator): void {
      const { offset } = data;
      this.tableStatsArray = this.tableStats.indexes.slice(
        offset,
        offset + pageLimit
      );
    }

    /**
     * The function `nextTablePage` updates the displayed table data to show the next page of items based
     * on the current page and page limit.
     */
    nextTablePage(): void {
      const start = this.tableCurrentPage * pageLimit;
      const end = start + pageLimit;
      this.tableStatsArray = this.tableStats.indexes.slice(start, end);
      this.tableCurrentPage++;
    }

    /**
     * The function `previousTablePage` updates the displayed table data to show the previous page of
     * results.
     */
    previousTablePage(): void {
      if (this.tableCurrentPage > 1) {
      const start = (this.tableCurrentPage - 2) * pageLimit;
      const end = start + pageLimit;
      this.tableStatsArray = this.tableStats.indexes.slice(start, end);
      this.tableCurrentPage--;
      }else {
        this.tableStatsArray = [];  // Ensure empty array on the first page
      }
    }

    /**
     * The trackByCommon function in TypeScript returns the index value passed to it.
     **/
    trackByCommon(index: number): number {
      return index;
    }

    /**
     * The function `paginationAcceptable` extracts a subset of data based on the offset provided in the
     * input.
     **/
    paginationAcceptable(data: IPaginator): void {
      const { offset } = data;
      this.acceptableData = this.data[this.cardOffset].indexes.slice(
        offset,
        offset + 3
      );
    }

    /**
     * The paginationCard function updates the cardOffset based on the direction provided and ensures it
     * stays within the bounds of the data length.
     * @param {number} direction - The `direction` parameter in the `paginationCard` function is a number
     * that determines the direction in which the pagination should move. If `direction` is positive, it
     * indicates moving forward in the pagination, and if it is negative, it indicates moving backward in
     * the pagination.
     */
    paginationCard(direction: number): void {
      this.cardOffset += direction;
      if (this.cardOffset < 0) {
        this.cardOffset = 0;
      } else if (this.cardOffset >= this.data.length) {
        this.cardOffset = this.data.length - 1;
      }
      this.cardData = this.data.slice(this.cardOffset, this.cardOffset + 1);
      this.setCardData();
      this.resetpaginationAcceptable = { limit: 3, offset: 0 };
      this.paginationAcceptable(this.resetpaginationAcceptable);
    }

    /**
     * The `setCardData` function sets the `isPassed`, `acceptableCount`, and `nonAcceptableCount`
     * properties based on data from the `indexes` array within the `data` object at the specified
     * `cardOffset`.
     */
    setCardData() {
      this.isPassed = this.data[this.cardOffset].is_passed;
      const counts = this.data[this.cardOffset].indexes.reduce(
        (acc: any, item: any) => {
          acc[item.is_passed ? 'trueCount' : 'falseCount']++;
          return acc;
        },
        { trueCount: 0, falseCount: 0 }
      );
      this.acceptableCount = counts.trueCount;
      this.nonAcceptableCount = counts.falseCount;
    }

    /**
     * The `ngOnDestroy` function in TypeScript is used to clean up resources and subscriptions by
     * completing a subject.
     */
    ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
      if (this.unitSub) {
        this.unitSub.unsubscribe();
      }
    }
  }
