import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryComponent } from './summary.component';
import { SummaryGraphComponent } from './summary-graph/summary-graph.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service';
import { Subject } from 'rxjs';
import { ISummaryData } from 'src/app/shared/configs/app.model';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;
  let dashboardServiceMock: jasmine.SpyObj<DashboardService>;
  let meanOrMedian$: Subject<number>;

  beforeEach(() => {
    meanOrMedian$ = new Subject<number>();
    dashboardServiceMock = jasmine.createSpyObj('DashboardService', [], {
      meanOrMedian$: meanOrMedian$.asObservable(),
    });

    TestBed.configureTestingModule({
      imports: [
        SummaryComponent,
        MatProgressBarModule,
        MatTooltipModule,
        SummaryGraphComponent,
      ],
      providers: [{ provide: DashboardService, useValue: dashboardServiceMock }],
    });

    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // it('should initialize data on ngOnInit', () => {
  //   const mockSummaryData: ISummaryData = {
  //     title: 'Summary Title',
  //     description: 'This is a description',
  //     tiles: {
  //       farmers_participated: {
  //         name: 'Farmers Participated',
  //         icon: 'icon-path',
  //         value: { mean: '100', is_dual_value: 'false' },
  //       },
  //       lip_farmers: {
  //         name: 'LIP Farmers',
  //         type: 'type',
  //         icon: 'icon-path',
  //         value: { mean: '50', is_dual_value: 'false' },
  //       },
  //       plot_size: {
  //         name: 'Plot Size',
  //         type: 'type',
  //         icon: 'icon-path',
  //         value: { mean: '1.5', median: '1.4', is_dual_value: 'false' },
  //       },
  //       house_hold_size: {
  //         name: 'Household Size',
  //         type: 'type',
  //         icon: 'icon-path',
  //         value: { mean: '4', median: '3.5', is_dual_value: 'false' },
  //       },
  //       male: {
  //         name: 'Male',
  //         type: 'type',
  //         icon: 'icon-path',
  //         value: { mean: '60', is_dual_value: 'false' },
  //       },
  //       female: {
  //         name: 'Female',
  //         type: 'type',
  //         icon: 'icon-path',
  //         value: { mean: '40', is_dual_value: 'false' },
  //       },
  //     },
  //     gender_bar: {
  //       title: 'Gender Distribution',
  //       sections: [{ name: 'Female', percentage: '40' }],
  //     },
  //   };
  
  //   component.summaryData = mockSummaryData;
  //   spyOn(component, 'initData').and.callThrough();
  
  //   component.ngOnInit();
  
  //   expect(component.initData).toHaveBeenCalled();
  //   expect(component.farmers_participated).toBe(100);
  //   expect(component.lip_farmers).toBe(50);
  //   expect(component.female_farmers).toBe(40);
  //   expect(component.male_farmers).toBe(60);
  //   expect(component.plot_size).toBe(1.5);
  //   expect(component.house_hold_size).toBe(4);
  //   expect(component.progressValue).toBe(40);
  // });
  

  it('should update unit on meanOrMedian$ subscription', () => {
    component.ngOnInit();

    meanOrMedian$.next(3);

    expect(component.unit).toBe(3);
  });

  it('should clean up the subscription on ngOnDestroy', () => {
    component.ngOnInit();

    // Trigger component destruction
    expect(() => component.ngOnDestroy()).not.toThrow();
  });

  it('should handle missing summaryData gracefully in initData', () => {
    component.summaryData = undefined as unknown as ISummaryData; // Bypasses TypeScript error
  
    expect(() => component.initData()).not.toThrow();
  
    expect(component.tiles).toBeUndefined();
    expect(component.farmers_participated).toBeUndefined();
    expect(component.female_farmers).toBeUndefined();
    expect(component.male_farmers).toBeUndefined();
    expect(component.progressValue).toBe(0);
  });
  

  afterEach(() => {
    fixture.destroy();
  });
});
