import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Subject,
  Subscription,
  catchError,
  retry,
  take,
  takeUntil,
} from 'rxjs';

import { COMP_IMPORTS, DashboardFilters } from './dashboard.config';
// services
import { ApiService } from 'src/app/shared/services/api.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service';
import { ExportService } from './export.service';
import { DataService } from 'src/app/shared/services/data/data.service';

import { DeforestationComponent } from 'src/app/feature/g-earth/deforestation/deforestation.component';
import {
  IAssessmentData,
  IBatches,
  ICompanyData,
  ICountryData,
  IFarmsData,
  IFilters,
  IGraphData,
  IImpactData,
  IInterventionsData,
  ILivingIncomeFilterData,
  IMapData,
  IPillars,
  IPlotData,
  IResultData,
  ISummaryData,
  ISupplychainData,
  ITableData,
  IUserData,
} from 'src/app/shared/configs/app.model';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: COMP_IMPORTS,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('toggleLabel', { static: false }) toggleLabel!: ElementRef;
  @ViewChild(DeforestationComponent)
  DeforestationComponent!: DeforestationComponent;

  // imageDataUrl: string | null = null;  // This will store the uploaded image data URL
  api = inject(ApiService);
  dashboardService = inject(DashboardService);
  private readonly storage = inject(StorageService);
  private exportService = inject(ExportService);
  private readonly dataService = inject(DataService);
  // private readonly location= inject(Location)

  dataLoaded = false;

  supplyChainData: ISupplychainData;
  countryData: ICountryData;

  searchForm: FormGroup = new FormGroup({
    search: new FormControl(''),
  });

  private destroy$ = new Subject<void>();

  invalidUser = false;
  batches: IBatches;
  tableData: ITableData;
  impactData: IImpactData = [];
  pillers: IPillars = [];
  selectedTab: string;
  companiesData: ICompanyData;

  selectedFilters: IFilters;
  selectedSupplychain: any;
  selectedCountry: string;
  selectedBatch: string;
  debounceTimeout: any;
  farmerGroupsData: IFarmsData = [];

  plotData: IPlotData;
  mapData: IMapData;
  mapLoading: boolean;
  layers = [
    {
      label: 'Tree cover loss',
      url: 'https://tiles.arcgis.com/tiles/nzS0F0zdNLvs7nc8/arcgis/rest/services/Tree_Cover_Loss2/MapServer',
      maxScale: 0,
      visible: true,
    },
  ];
  assessment: IAssessmentData;
  graphData: IGraphData;
  summaryData: ISummaryData;
  resultData: IResultData;
  livingIncomeFilterData: ILivingIncomeFilterData;
  unitTooltipEnabled = true;
  emissionsTableData: ITableData;
  interventionData: IInterventionsData;
  userData: IUserData;

  /**
   * The `ngOnInit` function in TypeScript initializes component data by subscribing to companies data,
   * selected tab changes, and fetching batches.
   */
  ngOnInit(): void {
    // this.subscribeToSelectedTab();
    this.dashboardService.SelectedCompanyId$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((value) => {
      this.storage.saveInStorage('entityId', value);
      this.subscribeToSelectedTab();
      this.getFarmerCount();
    });
  }

  ngAfterViewInit(): void {}

  getFarmerCount(): void {
    this.userData = this.dataService.getCompanyData();
  }

  /**
   * The function `subscribeToCompaniesData` subscribes to the `companiesData$` observable from
   * `dashboardService` and updates the `companiesData` property while also calling the
   * `getCompanyData` method.
   */
  subscribeToCompaniesData(): void {
    this.dashboardService.companiesData$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.companiesData = data;
        this.getCompanyData();
      });
  }

  /**
   * This function subscribes to changes in the selected tab from a dashboard service and updates the
   * selected tab and table data accordingly.
   */
  subscribeToSelectedTab(): void {
    this.dashboardService
      .selectedTab$()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.selectedTab = data;
        if (this.selectedTab == 'DEFORESTATION') {
          this.subscribeToCompaniesData();
          this.getTableData();
        }
        if (this.selectedTab != 'DEFORESTATION') {
          this.dataLoaded = false;
          this.fetchPillerData();
          if (this.selectedTab == 'Living income') {
            const unitTooltipEnabled =
              localStorage.getItem('unitTooltipEnabled');
            if (unitTooltipEnabled) {
              this.unitTooltipEnabled = false;
            } else {
              this.unitTooltipEnabled = true;
            }
          }
        }
      });
  }

  /**
   * The function `subscribeToDashboardFilters` subscribes to changes in selected filters from a
   * dashboard service and updates the component's properties accordingly.
   */
  subscribeToDashboardFilters(): void {
    this.dashboardService
      .selectedFilters$()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        const { supplychain, country, batch } = data;
        this.selectedFilters = data;
        this.selectedCountry = country;
        this.selectedSupplychain = supplychain;
        this.selectedBatch = batch;
        this.getBatches();
        this.fetchPolygons(data);
      });
  }

  fetchPolygons(filters: DashboardFilters): void {
    this.mapLoading = true;
    this.api
      .fetchMapData(filters)
      .pipe(
        retry(3), // Retry up to 3 times before failing
        takeUntil(this.destroy$),
        catchError((error) => {
          console.error('Error fetching polygons:', error);
          this.mapLoading = false;
          return []; // Return empty array on error
        })
      )
      .subscribe((res: any) => {
        if (!res?.data) {
          console.error('No data returned from API');
          this.mapLoading = false;
          return;
        }

        const geojsonArray = res.data;
        const polygons: any = [];
        const point: any[] = [];

        geojsonArray.forEach((feature: any) => {
          if (feature.geometry.type === 'Point') {
            point.push(feature.geometry.coordinates);
          } else if (feature.geometry.type === 'Polygon') {
            polygons.push(feature.geometry.coordinates[0]);
          }
        });

        this.plotData = {
          polygons,
          point,
          layers: this.layers,
        };
        this.mapLoading = false;
      });
  }

  /**
   * The trackByFn function in TypeScript returns the index value passed to it.
   **/
  trackByFn(index: number): number {
    return index;
  }

  /**
   * The `getTableData` function fetches table data based on the selected tab and assigns the analysis
   * and impact data to respective variables.
   */
  getTableData(): void {
    this.api
      .getTableData(this.selectedTab, this.selectedFilters)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (res) => {
          const { analysis, impact } = res?.data;
          this.tableData = analysis;
          this.impactData = impact;
          this.dataLoaded = true;
        },
        (error) => {
          this.dataLoaded = true;
        }
      );
  }

  /**
   * The `getBatches` function fetches batches data from an API and updates the component's state with
   * the results.
   */
  getBatches(): void {
    this.batches = [];
    this.api
      .getBatches(this.selectedFilters)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        const { results } = res?.data;
        this.batches = results || [];
      });
  }

  /**
   * The function `getCompanyData` extracts specific data fields from `companiesData` object and
   * assigns them to corresponding properties.
   */
  getCompanyData(): void {
    if (this.companiesData) {
      const { supply_chains, farmer_countries, pillers } = this.companiesData;
      this.supplyChainData = supply_chains;
      this.countryData = farmer_countries.length
        ? farmer_countries.map((country: string) => ({
            id: country,
            name: country,
          }))
        : [];
      this.pillers = pillers;

      this.subscribeToDashboardFilters();
    }
  }

  /**
   * The function `isObjectNotEmpty` checks if an object is not empty by verifying if it has
   * properties.
   **/
  isObjectNotEmpty(obj: any): boolean {
    return obj && Object.keys(obj).length > 0;
  }

  /**
   * The `filterSelected` function in TypeScript updates a filter in a dashboard service with a
   * debounce timeout.
   **/
  filterSelected(item: any, type: keyof DashboardFilters): void {
    if (this.selectedTab != 'Living income') {
      item = item === 'All' ? '' : item;
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(() => {
        this.dashboardService.updateFilter(type, item);
      }, 100);
    } else if (this.selectedTab == 'Living income') {
      item = item === 'All' ? '' : item;
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(() => {
        this.dashboardService.updateFilter(type, item);
      }, 100);
    }
  }

  filterSelectedEmissions(item: any): void {}

  /*istanbul ignore next */
  fetchPillerData() {
    const apiCall =
      this.selectedTab == 'Living income'
        ? this.api.fetchLivingIncomeData()
        : this.api.fetchEmissionsData();

    apiCall.pipe(takeUntil(this.destroy$)).subscribe((res: any) => {
      const {
        assessment,
        graphs,
        summary,
        result,
        supply_chains,
        farmer_countries,
        farmer_groups,
        map,
        table,
        interventions,
      } = res;
      this.assessment = assessment;
      this.graphData = graphs;
      this.summaryData = summary;
      this.resultData = result;
      this.mapData = map;
      this.livingIncomeFilterData = {
        supply_chains,
        farmer_countries,
        farmer_groups,
      };
      if (this.selectedTab == 'Emissions') {
        this.emissionsTableData = table;
        //  (interventions,'Int');
        this.interventionData = interventions;
      }

      this.dataLoaded = true;
      this.setLivIncFilterData();
    });
  }
  /*istanbul ignore next */
  setLivIncFilterData(): void {
    const { supply_chains, farmer_countries, farmer_groups } =
      this.livingIncomeFilterData;
    this.supplyChainData = supply_chains;
    this.countryData = farmer_countries;
    //  (farmer_groups,'FG');
    if (this.selectedTab == 'Living income') {
      this.farmerGroupsData = farmer_groups;
      this.dashboardService.updateFilter(
        'farmerGroup',
        this.farmerGroupsData[0].id
      );
    }
  }

  toggleMeanMedium(event: Event): void {
    const inputEvent = event as InputEvent;
    const checkbox = inputEvent.target as HTMLInputElement;
    const isChecked = checkbox.checked;
    if (isChecked) {
      this.dashboardService.setUnit(1);
    } else {
      this.dashboardService.setUnit(2);
    }
  }

  close(hide: boolean): void {
    this.unitTooltipEnabled = false;
    if (hide) {
      this.storage.saveInStorage('unitTooltipEnabled', hide);
    }
  }

  filterSelectedLiv(item: any): void {
    // if (item.id == "All") {
    //   return
    // }
    // this.dataLoaded = false
    // this.selectedSupplychain = item
    // this.fetchData(item?.dataFile)
  }

  exportAsHTML() {
    this.exportService.exportAsHTML(
      this.DeforestationComponent,
      this.dataService.getDeforestationData()
    );
  }

  /**
   * The ngOnDestroy function in TypeScript is used to clean up resources and unsubscribe from
   * subscriptions before a component is destroyed.
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
