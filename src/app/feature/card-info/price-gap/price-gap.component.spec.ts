import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriceGapComponent } from './price-gap.component';
import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service';
import { of } from 'rxjs';
import { Emissions, IResultData, Lip } from 'src/app/shared/configs/app.model';

// Mock DashboardService
class MockDashboardService {
  meanOrMedian$ = of(1); // Mocked meanOrMedian$ observable
}

describe('PriceGapComponent', () => {
  let component: PriceGapComponent;
  let fixture: ComponentFixture<PriceGapComponent>;
  let mockDashboardService: MockDashboardService;

  beforeEach(async () => {
    mockDashboardService = new MockDashboardService();

    await TestBed.configureTestingModule({
      imports: [PriceGapComponent], // Import the standalone component
      providers: [{ provide: DashboardService, useValue: mockDashboardService }],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceGapComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize lip data correctly', () => {
    component.resultData = {
      title: "Test Data",
      standards: {
        lip: {
          name: "Lip Standard",
          indexes: {
            living_income_percentage: { title: "Living Income Percentage", value: { mean: "80", median: "75", mean_color: "green", median_color: "blue", is_dual_value: "false" } },
            current_pay: { name: "Current Pay", value: { mean: "50", median: "45", is_dual_value: "false" } },
            living_income: { name: "Living Income", value: { mean: "60", median: "55", is_dual_value: "false" } },
            price_gap: { name: "Price Gap", value: { mean: "10", median: "12", mean_color: "red", median_color: "yellow", is_dual_value: "false" } },
          },
          progress_bar: {
            median_bar: [{ description: "Median Bar", value: "", color: "blue", percentage: "75" }],
            mean_bar: [{ description: "Mean Bar", value: "", color: "green", percentage: "80" }],
          }
        }
      }
    } as IResultData;

    component.initData();

    expect(component.lipData).toBeTrue();
    expect(component.dataLip).toEqual(component.resultData.standards.lip!);
    expect(component.progressValue).toBe(80);
  });

  it('should initialize emissions data correctly', () => {
    component.resultData = {
      title: "Test Data",
      standards: {
        emissions: {
          name: "Emissions Standard",
          indexes: {
            annual_variation: { name: "Annual Variation", value: 5, color: "blue" },
            carbon_removed: { name: "Carbon Removed", description: "Total removed", value: 100, color: "green" },
            current_year: { name: "Current Year", value: 200, color: "gray" },
            past_year: { name: "Past Year", value: 195, color: "gray" }
          },
          progress_bar: {
            mean_bar: [{ description: "Mean Bar", value: "", color: "green", percentage: "90" }]
          }
        }
      }
    } as IResultData;

    component.initData();

    expect(component.emissionsData).toBeTrue();
    expect(component.dataEmissions).toEqual(component.resultData.standards.emissions!);
    expect(component.progressValue).toBe(90);
  });
  
  it('should not initialize any data if no standards are provided', () => {
    component.resultData = { title: "Test Data", standards: {} };
    component.initData();

    expect(component.lipData).toBeFalse();
    expect(component.emissionsData).toBeFalse();
    expect(component.progress_bar).toEqual([]);
  });

  it('should unsubscribe from unitSub on component destruction', () => {
    const unsubscribeSpy = spyOn(
      component['unitSub'],
      'unsubscribe'
    ).and.callThrough();

    component.ngOnDestroy();

    expect(unsubscribeSpy).toHaveBeenCalled();
  });
});
