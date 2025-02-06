import { TestBed, ComponentFixture, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service';
import { ApiService } from 'src/app/shared/services/api.service';
import {  StorageService } from 'src/app/shared/services/storage.service';
import { ExportService } from './export.service';
import { DataService } from 'src/app/shared/services/data/data.service';
import { of, Subject } from 'rxjs';
import { DashboardFilters } from './dashboard.config';
import { CardInfoComponent } from 'src/app/feature/card-info';
import { ICompanyData, IUserData } from 'src/app/shared/configs/app.model';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let selectedTabSubject: Subject<string>;

  // Mock dependencies
  const mockApiService = {
    fetchMapData: jasmine.createSpy('fetchMapData').and.returnValue(of({ data: [] })),
    getTableData: jasmine.createSpy('getTableData').and.returnValue(of({ data: { analysis: [], impact: [] } })),
    getBatches: jasmine.createSpy('getBatches').and.returnValue(of({ data: { results: [] } })),
    fetchLivingIncomeData: jasmine.createSpy('fetchLivingIncomeData').and.returnValue(of({})),
    fetchEmissionsData: jasmine.createSpy('fetchEmissionsData').and.returnValue(of({}))
  };

  const mockData = {
    supplychain: 'SupplyChain1',
    country: 'Country1',
    batch: 'Batch1',
  };

  const companiesDataSubject = new Subject<any>();
  selectedTabSubject = new Subject<string>();
  const mockDashboardService = {
    SelectedCompanyId$: new Subject<string>(),
    companiesData$: companiesDataSubject.asObservable(), // Convert Subject to Observable
    selectedTab$: () => selectedTabSubject.asObservable(),
    selectedFilters$: jasmine.createSpy('selectedFilters$').and.returnValue(of(mockData)), // Corrected for spying
    updateFilter: jasmine.createSpy('updateFilter'),
    setUnit: jasmine.createSpy('setUnit'),
  };
  
  

  const mockStorageService = {
    saveInStorage: jasmine.createSpy('saveInStorage')
  };

  const mockExportService = {
    exportAsHTML: jasmine.createSpy('exportAsHTML')
  };

  const mockDataService = {
    getDeforestationData: jasmine.createSpy('getDeforestationData').and.returnValue({}),
    getCompanyData: jasmine.createSpy('getCompanyData').and.returnValue({})
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent,CardInfoComponent], // Import the component's standalone configuration
      providers: [
        { provide: ApiService, useValue: mockApiService },
        { provide: DashboardService, useValue: mockDashboardService },
        { provide: StorageService, useValue: mockStorageService },
        { provide: ExportService, useValue: mockExportService },
        { provide: DataService, useValue: mockDataService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize and subscribe to SelectedCompanyId$', () => {
    const spy = spyOn(component, 'subscribeToSelectedTab');
    mockDashboardService.SelectedCompanyId$.next('12345');

    expect(mockStorageService.saveInStorage).toHaveBeenCalledWith('entityId', '12345');
    expect(spy).toHaveBeenCalled();
  });

  it('should fetch table data on getTableData()', () => {
    component.getTableData();
    expect(mockApiService.getTableData).toHaveBeenCalled();
  });

  it('should clean up on ngOnDestroy()', () => {
    const destroySpy = spyOn(component['destroy$'], 'next');
    const completeSpy = spyOn(component['destroy$'], 'complete');
    component.ngOnDestroy();

    expect(destroySpy).toHaveBeenCalled();
    expect(completeSpy).toHaveBeenCalled();
  });

  it('should call exportAsHTML on exportAsHTML()', () => {
    component.exportAsHTML();
    expect(mockExportService.exportAsHTML).toHaveBeenCalled();
  });

  it('should subscribe to companiesData$ and call getCompanyData()', () => {
    const mockCompaniesData: ICompanyData = {
      id: 'company-1',
      updated_on: '2024-01-01',
      created_on: '2024-01-01',
      street: '123 Main St',
      city: 'Metropolis',
      state: 'StateName',
      country: 'CountryName',
      zip_code: '12345',
      image: null,
      name: 'Company Name',
      sso_id: 'sso-123',
      creator: null,
      updater: null,
      title: 'Company Title',
      sub_title: 'Company Subtitle',
      description: 'Company Description',
      supply_chains: [],
      farmer_countries: [],
      pillers: [],
    };

    const companiesDataSubject = new Subject<ICompanyData>();
    mockDashboardService.companiesData$ = companiesDataSubject.asObservable();
    const getCompanyDataSpy = spyOn(component, 'getCompanyData');

    component.subscribeToCompaniesData();
    companiesDataSubject.next(mockCompaniesData);

    expect(component.companiesData).toEqual(mockCompaniesData);
    expect(getCompanyDataSpy).toHaveBeenCalled();
  });


  it('should handle selectedTab$ subscription for "DEFORESTATION"', () => {
    spyOn(component, 'subscribeToCompaniesData');
    spyOn(component, 'getTableData');
    spyOn(component, 'fetchPillerData');
  
    const selectedTabSubject = new Subject<string>();
    // directly assigning the Subject
    mockDashboardService.selectedTab$ = () => selectedTabSubject.asObservable();
  
    component.subscribeToSelectedTab();
    selectedTabSubject.next('DEFORESTATION');
  
    expect(component.selectedTab).toBe('DEFORESTATION');
    expect(component.subscribeToCompaniesData).toHaveBeenCalled();
    expect(component.getTableData).toHaveBeenCalled();
  });
  
  

  it('should handle selectedTab$ subscription for "Living income"', () => {
    spyOn(component, 'fetchPillerData');
    spyOn(localStorage, 'getItem').and.returnValue('true');

    const selectedTabSubject = new Subject<string>();
    mockDashboardService.selectedTab$ = () => selectedTabSubject.asObservable();

    component.subscribeToSelectedTab();
    selectedTabSubject.next('Living income');

    expect(component.selectedTab).toBe('Living income');
    expect(component.unitTooltipEnabled).toBe(false);
    expect(component.fetchPillerData).toHaveBeenCalled();
  });

  it('should return the index passed to it', () => {
    expect(component.trackByFn(5)).toBe(5);
  });

  
  it('should set company data fields and subscribe to dashboard filters', () => {
    component.companiesData = {
      id: 'company-1',
      updated_on: '2024-01-01',
      created_on: '2024-01-01',
      street: '123 Main St',
      city: 'Metropolis',
      state: 'StateName',
      country: 'CountryName',
      zip_code: '12345',
      image: null,
      name: 'Company Name',
      sso_id: 'sso-123',
      creator: null,
      updater: null,
      title: 'Company Title',
      sub_title: 'Company Subtitle',
      description: 'Company Description',
      supply_chains: [
        {
          id: '1',
          updated_on: '2024-01-01',
          created_on: '2024-01-01',
          name: 'supplychain1',
          image: null,
          creator: null,
          updater: null,
        }
      ],
      farmer_countries: ['country1'],
      pillers: ['piller1'],
    };

    spyOn(component, 'subscribeToDashboardFilters');
  
    component.getCompanyData();
  
    expect(component.supplyChainData).toEqual([
      {
        id: '1',
        updated_on: '2024-01-01',
        created_on: '2024-01-01',
        name: 'supplychain1',
        image: null,
        creator: null,
        updater: null,
      }
    ]);
    expect(component.countryData).toEqual([{ id: 'country1', name: 'country1' }]);
    expect(component.pillers).toEqual(['piller1']);
    expect(component.subscribeToDashboardFilters).toHaveBeenCalled();
  });


  it('should return true if the object is not empty', () => {
    expect(component.isObjectNotEmpty({ key: 'value' })).toBeTrue();
    expect(component.isObjectNotEmpty({})).toBeFalse();
  });

  it('should fetch polygons and update map data', async () => {
    const mockResponse = {
      data: [
        { geometry: { type: 'Point', coordinates: [1, 2] } },
        { geometry: { type: 'Polygon', coordinates: [[[3, 4], [5, 6]]] } },
      ],
    };
    mockApiService.fetchMapData.and.returnValue(of(mockResponse));
  
    const filters: DashboardFilters = {
      country: 'TestCountry',
      supplychain: 'TestSupplychain',
      batch: 'TestBatch',
      farmerGroup: 'TestFarmerGroup',
    };
  
    component.fetchPolygons(filters);
    expect(mockApiService.fetchMapData).toHaveBeenCalledWith(filters);
  
    await fixture.whenStable(); // Wait for async tasks to complete
  
    expect(component.plotData).toEqual({
      polygons: [[[3, 4], [5, 6]]],
      point: [[1, 2]],
      layers: component.layers,
    });

    
  });
  
  it('should fetch batches and update the batches property', () => {
    const mockResponse = {
      data: {
        results: [
          {
            id: '1',
            name: 'Batch 1',
            updated_on: '2024-01-01',
            created_on: '2024-01-01',
            external_id: 'EXT-001',
            creator: null,
            updater: null,
            supply_chain: 'SC-001',
            farmers: ['Farmer 1', 'Farmer 2'],
          },
          {
            id: '2',
            name: 'Batch 2',
            updated_on: '2024-01-02',
            created_on: '2024-01-02',
            external_id: 'EXT-002',
            creator: null,
            updater: null,
            supply_chain: 'SC-002',
            farmers: ['Farmer 3'],
          },
        ],
      },
    };

    // Mock API service response
    mockApiService.getBatches.and.returnValue(of(mockResponse));

    // Call the method
    component.getBatches();

    // Expectations
    expect(mockApiService.getBatches).toHaveBeenCalledWith(component.selectedFilters);
    expect(component.batches).toEqual(mockResponse.data.results);
  });


  it('should set batches to an empty array if no results are returned', () => {
    const mockResponse = {
      data: {
        results: null, 
      },
    };

    mockApiService.getBatches.and.returnValue(of(mockResponse));

    component.getBatches();

    expect(mockApiService.getBatches).toHaveBeenCalledWith(component.selectedFilters);
    expect(component.batches).toEqual([]);
  });
  

  it('should update filters and call dependent methods when data is emitted', () => {
    const mockData = {
      supplychain: 'SupplyChain1',
      country: 'Country1',
      batch: 'Batch1',
      farmerGroup: 'FarmerGroup1',
    };
  
    // Mock selectedFilters$ observable
    mockDashboardService.selectedFilters$.and.returnValue(of(mockData)); // Works because it's a spyable method
  
    // Spy on methods to verify calls
    spyOn(component, 'getBatches');
    spyOn(component, 'fetchPolygons');
  
    // Call the method
    component.subscribeToDashboardFilters();
  
    // Expectations
    expect(component.selectedFilters).toEqual(mockData);
    expect(component.selectedCountry).toBe(mockData.country);
    expect(component.selectedSupplychain).toBe(mockData.supplychain);
    expect(component.selectedBatch).toBe(mockData.batch);
  
    // Verify that getBatches and fetchPolygons are called with the correct arguments
    expect(component.getBatches).toHaveBeenCalled();
    expect(component.fetchPolygons).toHaveBeenCalledWith(mockData);
  });
  

  it('should update filter after debounce timeout for a non-"Living income" tab', fakeAsync(() => {
    component.selectedTab = 'Deforestation';  // Set a tab other than 'Living income'
    const mockItem = 'Country1';  // Item to be passed
    const mockType: keyof DashboardFilters = 'country';  // Filter type
    
    // Spy on the updateFilter method
    // const spy = spyOn(component.dashboardService, 'updateFilter');
    
    // Call the method
    component.filterSelected(mockItem, mockType);
  
    // Before the debounce timeout, updateFilter should not be called
    expect(mockDashboardService.updateFilter).not.toHaveBeenCalled();
  
    // Advance the timer to simulate debounce
    tick(100);
  
    // After the debounce timeout, updateFilter should be called with the correct arguments
    expect(mockDashboardService.updateFilter).toHaveBeenCalledWith(mockType, mockItem);
  
    // Cleanup any periodic tasks
    discardPeriodicTasks();
  }));

  it('should fetch and set userData from dataService', () => {
    const mockUserData: IUserData = {
      id: '1',
      username: 'testuser',
      first_name: 'Test',
      last_name: 'User',
      email: 'test@example.com',
      profile_image: null,
      sso_id: 'sso123',
      default_company: 'company1',
      companies: [],
      theme: 'light',
      calculated_farms: 50,
      total_farms: 100,
    };
  
    mockDataService.getCompanyData.and.returnValue(mockUserData); // Mock the service response
  
    component.getFarmerCount(); // Call the method
  
    expect(mockDataService.getCompanyData).toHaveBeenCalled(); // Check that the service method was called
    expect(component.userData).toEqual(mockUserData); // Verify that userData is set correctly
  });
  
  

  it('should set unitTooltipEnabled to false and call saveInStorage when hide is true', () => {
    // Call the close method with hide = true
    component.close(true);
  
    // Check that unitTooltipEnabled is set to false
    expect(component.unitTooltipEnabled).toBe(false);
  
    // Check that saveInStorage was called with the correct arguments
    expect(mockStorageService.saveInStorage).toHaveBeenCalledWith('unitTooltipEnabled', true);
  });
  
  it('should set unitTooltipEnabled to false and not call saveInStorage when hide is false', () => {
    // Ensure saveInStorage spy is clear before calling close
    mockStorageService.saveInStorage.calls.reset();
  
    // Call the close method with hide = false
    component.close(false);
  
    // Check that unitTooltipEnabled is set to false
    expect(component.unitTooltipEnabled).toBe(false);
  
    // Ensure saveInStorage was NOT called
    expect(mockStorageService.saveInStorage).not.toHaveBeenCalled();
  });
  
  
});
