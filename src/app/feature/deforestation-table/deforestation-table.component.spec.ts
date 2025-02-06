import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DeforestationTableComponent } from './deforestation-table.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/shared/services';
import { ExportService } from 'src/app/pages/dashboard/export.service';
import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DeforestationDetailsComponent } from '../deforestation-details/deforestation-details.component';

describe('DeforestationTableComponent', () => {
  let component: DeforestationTableComponent;
  let fixture: ComponentFixture<DeforestationTableComponent>;
  let dialog: jasmine.SpyObj<MatDialog>;
  let apiService: jasmine.SpyObj<ApiService>;
  let exportService: jasmine.SpyObj<ExportService>;
  let dashboardService: jasmine.SpyObj<DashboardService>;

  beforeEach(async () => {
    const dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['getAnalysisDetails']);
    const exportServiceSpy = jasmine.createSpyObj('ExportService', ['popupData']);
    const dashboardServiceSpy = jasmine.createSpyObj('DashboardService', ['selectedTab$']);

    await TestBed.configureTestingModule({
      imports: [DeforestationTableComponent],
      providers: [
        { provide: MatDialog, useValue: dialogSpy },
        { provide: ApiService, useValue: apiServiceSpy },
        { provide: ExportService, useValue: exportServiceSpy },
        { provide: DashboardService, useValue: dashboardServiceSpy },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(DeforestationTableComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    exportService = TestBed.inject(ExportService) as jasmine.SpyObj<ExportService>;
    dashboardService = TestBed.inject(DashboardService) as jasmine.SpyObj<DashboardService>;
  });

  beforeEach(() => {
    dashboardService.selectedTab$.and.returnValue(of({}));
    apiService.getAnalysisDetails.and.returnValue(of({ data: 'popupData' }));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the popupData on ngOnInit', () => {
    // Updated tableData to match the ITableData interface structure
    component.tableData = {
      title: 'Sample Title',
      description: 'Sample Description',
      head: [
        { id: 1, name: 'Header 1' },
        { id: 2, name: 'Header 2' },
      ],
      rows: [
        {
          id: 1,
          values: ['Value1', 'Value2', 10, 20, 30],
          details: {}
        }
      ]
    };
  
    component.ngOnInit();
  
    // Verify that popupData has been initialized correctly
    expect(component.popupData.length).toBeGreaterThan(0);
  });
  

  it('should track rows by id in trackByRows', () => {
    const row = { id: 1 };
    const result = component.trackByRows(0, row);
    expect(result).toBe(1);
  });

  it('should track by index in trackByCommon', () => {
    const result = component.trackByCommon(0);
    expect(result).toBe(0);
  });

  it('should populate popupData correctly in initPopupData', () => {
    const rows = [
      {
        id: 1,
        values: ['Value1', 'Value2', 10, 20, 30],
        details: {}
      }
    ];
  
    component.tableData = {
      title: 'Sample Title',
      description: 'Sample Description',
      head: [
        { id: 1, name: 'Header 1' },
        { id: 2, name: 'Header 2' }
      ],
      rows: [
        {
          id: 1,
          values: ['Value1', 'Value2', 10, 20, 30],
          details: {}
        }
      ]
    }; 
  
    component.initPopupData(); // Call initPopupData
  
    // Verify that popupData is populated correctly
    expect(component.popupData).toEqual([{}]); // Since details is an empty object, expect [{}]
    expect(component.exportService.popupData).toEqual([{}]); // Ensure exportService is also populated with the empty details
  });
  

  it('should clean up subscriptions in ngOnDestroy', () => {
    spyOn(component['destroy$'], 'next');
    spyOn(component['destroy$'], 'complete');
    component.ngOnDestroy();
    expect(component['destroy$'].next).toHaveBeenCalled();
    expect(component['destroy$'].complete).toHaveBeenCalled();
  });

  it('should fetch data and update popupData on successful API response', fakeAsync(() => {
    const mockData = { data: 'mockData' };
    
    // Set up the mock API response
    apiService.getAnalysisDetails.and.returnValue(of(mockData));
  
    // Call the function with a criteria string
    component.getPopupData('criteriaValue');
  
    // Simulate passage of time for the async call to complete
    tick();  // this will trigger any async operations to complete
  
    // Check that the API was called with correct parameters
    expect(apiService.getAnalysisDetails).toHaveBeenCalledWith(component.selectedPiller, 'criteriaValue');
  
    // Check that the popupData array is updated
    expect(component.popupData).toContain('mockData'); // Ensure 'mockData' is the expected result
  
    // Check that dataLoaded is set to true
    expect(component.dataLoaded).toBeTrue();
  }));

  
});
