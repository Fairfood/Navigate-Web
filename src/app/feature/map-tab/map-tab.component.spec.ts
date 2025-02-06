import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapTabComponent } from './map-tab.component';
import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service';
import { of, BehaviorSubject } from 'rxjs';
import { TitleCasePipe } from '@angular/common';
import { NgFor } from '@angular/common';

describe('MapTabComponent', () => {
  let component: MapTabComponent;
  let fixture: ComponentFixture<MapTabComponent>;
  let mockDashboardService: DashboardService;

  beforeEach(async () => {
    // Mock companiesData$ as a BehaviorSubject directly
    const companiesDataSubject = new BehaviorSubject({ pillers: ['Piller1', 'Piller2'] });

    mockDashboardService = {
      companiesData$: companiesDataSubject.asObservable(), // Directly use the observable
      selectedTab$() {
        return new BehaviorSubject('DEFORESTATION').asObservable();
      },
      updateSelectedTab: jasmine.createSpy('updateSelectedTab'),
      setUnit: jasmine.createSpy('setUnit'),
      setCompaniesData: jasmine.createSpy('setCompaniesData').and.callFake((data: any) => {
        // Update the data for companiesData$ by calling next on the BehaviorSubject
        companiesDataSubject.next(data);
      }),
    } as unknown as DashboardService;

    await TestBed.configureTestingModule({
      imports: [MapTabComponent, NgFor, TitleCasePipe],
      providers: [{ provide: DashboardService, useValue: mockDashboardService }],
    }).compileComponents();

    fixture = TestBed.createComponent(MapTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize tabs from service data', () => {
    component.ngOnInit(); // Trigger ngOnInit to subscribe to companiesData$
    expect(component.tabs).toEqual(['Piller1', 'Piller2', 'Living income', 'Emissions']);
  });

  it('should update selectedTab based on service', () => {
    component.ngOnInit(); // Subscribe to selectedTab$
    expect(component.selectedTab).toBe('DEFORESTATION');
  });

  it('should call updateSelectedTab and setUnit on tabSelected', () => {
    const tab = 'Emissions';
    component.tabSelected(tab);

    expect(mockDashboardService.updateSelectedTab).toHaveBeenCalledWith(tab);
    expect(mockDashboardService.setUnit).toHaveBeenCalledWith(1);
  });

  it('should unsubscribe from observables on destroy', () => {
    const destroySpy = spyOn(component['destroy$'], 'next');
    const completeSpy = spyOn(component['destroy$'], 'complete');
    
    // Trigger ngOnDestroy
    component.ngOnDestroy();

    // Assert that destroy$ emits and completes
    expect(destroySpy).toHaveBeenCalled();
    expect(completeSpy).toHaveBeenCalled();
  });

  it('should update tabs correctly when companiesData$ emits new data', () => {
    component.ngOnInit(); // Subscribe to companiesData$
    
    // Simulate new data with additional pillers
    mockDashboardService.setCompaniesData({ pillers: ['Piller3'] });

    // After new data is set, the tabs array should be updated
    expect(component.tabs).toEqual(['Piller3', 'Piller1', 'Piller2', 'Living income', 'Emissions']);
  });
});
