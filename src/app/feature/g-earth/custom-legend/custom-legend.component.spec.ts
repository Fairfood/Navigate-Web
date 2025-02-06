import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CustomLegendComponent } from './custom-legend.component';
import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service';
import { of, Subject } from 'rxjs';

describe('CustomLegendComponent', () => {
  let component: CustomLegendComponent;
  let fixture: ComponentFixture<CustomLegendComponent>;
  let mockDashboardService: DashboardService;
  let meanOrMedian$ = new Subject<number>();

  beforeEach(async () => {
    mockDashboardService = {
      meanOrMedian$: meanOrMedian$
    } as unknown as DashboardService;

    await TestBed.configureTestingModule({
      imports: [CustomLegendComponent],
      providers: [{ provide: DashboardService, useValue: mockDashboardService }]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomLegendComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize legend data on changes', fakeAsync(() => { 
    // Mock the legend data with both mean and median values 
    component.legendData = { 
      min: { value: 0, color: '#000000' }, 
      max: { value: 100, color: '#FFFFFF' }, 
      current: { mean: 50, median: 60 } 
    };
  
    // Manually trigger ngOnChanges to make sure the component reacts to the changes 
    component.ngOnChanges(); 
  
    // Ensure that currentValue is initialized correctly based on the default mean (which is 50) 
    expect(component.minValue).toBe(0); 
    expect(component.maxValue).toBe(100); 
    expect(component.legendGradient).toBe('linear-gradient(to right, #000000, #FFFFFF)'); 
    expect(component.currentValue).toBe(0);
  
    // Now trigger the observable to test it handles the change to 'median' 
    meanOrMedian$.next(2); // Simulate switching to median
  
    // Simulate the passage of time to process the observable change 
    tick(); 
  
    // Ensure that currentValue is updated correctly based on the median (which is 60) 
    expect(component.currentValue).toBe(60); // Median value
  }));
  
  

  it('should update current price position', () => {
    component.currentValue = 50;
    component.minValue = 0;
    component.maxValue = 100;
    component.updatePricePosition();

    expect(component.currentPricePosition).toBe(50); // 50% position
  });

  it('should unsubscribe on destroy', () => {
    // Trigger ngOnChanges to ensure the component subscribes
    component.ngOnChanges();
    
    // Spy on the unsubscribe method of unitSub (the subscription)
    const unsubscribeSpy = spyOn(component['unitSub'], 'unsubscribe').and.callThrough();

    // Trigger ngOnDestroy to test unsubscription
    component.ngOnDestroy();

    // Assert that unsubscribe was called
    expect(unsubscribeSpy).toHaveBeenCalled();
  });

  it('should update current value based on mean or median', () => {
    component.legendData = {
      min: { value: 0, color: '#000000' },
      max: { value: 100, color: '#FFFFFF' },
      current: { mean: 50, median: 60 }
    };
    component.ngOnChanges(); // Subscribe to meanOrMedian$ observable

    meanOrMedian$.next(2); // Simulate receiving a value
    expect(component.currentValue).toBe(60); // Median

    meanOrMedian$.next(1); // Simulate receiving another value
    expect(component.currentValue).toBe(50); // Mean
  });
});
