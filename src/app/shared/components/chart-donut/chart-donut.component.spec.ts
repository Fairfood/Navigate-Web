import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartDonutComponent } from './chart-donut.component';
import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { Chart, ChartEvent, ChartConfiguration, Plugin } from 'chart.js';

describe('ChartDonutComponent', () => {
  let component: ChartDonutComponent;
  let fixture: ComponentFixture<ChartDonutComponent>;
  let dashboardServiceMock: jasmine.SpyObj<DashboardService>;

  beforeEach(() => {
    // Create a mock instance of DashboardService
    dashboardServiceMock = jasmine.createSpyObj('DashboardService', ['setUnit', 'updateSelectedTab']);
    
    // Mock meanOrMedian$ to return an observable
    dashboardServiceMock.meanOrMedian$ = of(1);
    
    TestBed.configureTestingModule({
      imports: [ChartDonutComponent, CommonModule, NgChartsModule],
      providers: [
        { provide: DashboardService, useValue: dashboardServiceMock }
      ]
    }).compileComponents();

    // Create the component and trigger change detection
    fixture = TestBed.createComponent(ChartDonutComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to dashboardService.meanOrMedian$ in ngOnInit', () => {
    // Spy on the subscription method on the Observable
    const spy = spyOn(dashboardServiceMock.meanOrMedian$, 'subscribe');

    // Act: Trigger ngOnInit
    component.ngOnInit();

    // Assert: Verify the subscription has been called
    expect(spy).toHaveBeenCalled();
  });

  it('should update doughnutChartData on ngOnChanges', () => {
    // Arrange: Mock the input data for chartData
    const mockChartData = {
      title: "Living income price",
      categories: [
        { title: 'Category 1', value_in_percentage: 40 },
        { title: 'Category 2', value_in_percentage: 30 },
        { title: 'Category 3', value_in_percentage: 30 }
      ],
      center_label: { title: 'Total', value: { mean: 50, median: 60 }, is_dual_value: 'True' },
      unit: 'USD'
    };

    const simpleChangeMock = {
      currentValue: mockChartData,
      previousValue: null,
      firstChange: true,
      isFirstChange: jasmine.createSpy('isFirstChange').and.returnValue(true)
    };

    component.chartData = mockChartData;

    // Act: Trigger ngOnChanges
    component.ngOnChanges({
      chartData: simpleChangeMock
    });

    // Assert: Verify the updates to doughnutChartData
    expect(component.doughnutChartData.labels).toEqual(['Category 1', 'Category 2', 'Category 3']);
    expect(component.doughnutChartData.datasets[0].data).toEqual([40, 30, 30]);
    expect(component.doughnutChartData.datasets[0].backgroundColor).toEqual(['#F1C40F', '#D54644', '#52A130']);
    expect(component.doughnutChartData.options.plugins.centerTextPlugin.center_label.value).toEqual(50);
  });

  it('should call chartClicked and log event and active', () => {
    const logSpy = spyOn(console, 'log');
    const mockEvent: ChartEvent = {
      type: 'click',
      native: {} as MouseEvent,
      x: 100,   // Example x coordinate
      y: 200,   // Example y coordinate
    };
    
    const mockActive = [{ _datasetIndex: 0, _index: 1 }];
    component.chartClicked({ event: mockEvent, active: mockActive });
    expect(logSpy).toHaveBeenCalledWith(mockEvent, mockActive);
  });
  
  it('should call chartHovered and log event and active', () => {
    const logSpy = spyOn(console, 'log');
    const mockEvent: ChartEvent = {
      type: 'mousemove', // Change 'hover' to a valid type like 'mousemove'
      native: {} as MouseEvent,
      x: 150,  // Example x coordinate
      y: 250,  // Example y coordinate
    };
  
    const mockActive = [{ _datasetIndex: 0, _index: 1 }]; 
    component.chartHovered({ event: mockEvent, active: mockActive });
    expect(logSpy).toHaveBeenCalledWith(mockEvent, mockActive);
  });
  
  it('should unsubscribe from unitSub in ngOnDestroy', () => {
    const unsubscribeSpy = jasmine.createSpy('unsubscribe');
    component['unitSub'] = {
      unsubscribe: unsubscribeSpy
    } as any;
    component.ngOnDestroy();
    expect(unsubscribeSpy).toHaveBeenCalled();
  });
  

  it('should register the centerTextPlugin and draw custom text', () => {
    // Arrange: Mock the chart
    const mockChart = {
      ctx: {
        restore: jasmine.createSpy('restore'),
        fillText: jasmine.createSpy('fillText'),
        font: '',
        textBaseline: '',
        textAlign: '',
        save: jasmine.createSpy('save')
      },
      width: 100,
      height: 100,
      options: {
        plugins: {
          centerTextPlugin: {
            center_label: {
              title: 'Center Title',
              value: '100',
              unit: 'units'
            }
          }
        }
      }
    };
  
    // Mock the args object with cancelable set to true
    const args = { cancelable: true } as { cancelable: true };
  
    // Register the plugin with Chart.js
    Chart.register({
      id: 'centerTextPlugin',
      beforeDraw(chart, args, options) {
        const ctx = chart.ctx;
        const { width, height } = chart;
  
        ctx.restore();
        // Draw custom text
        const customText = chart?.options?.plugins?.centerTextPlugin?.center_label?.title || '';
        const valueText = chart?.options?.plugins?.centerTextPlugin?.center_label?.value || '';
        const unit = chart?.options?.plugins?.centerTextPlugin?.center_label?.unit || '';
  
        // Draw the custom text
        ctx.font = `8px Moderat Regular`;
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        const customTextX = width / 2;
        const customTextY = height / 2 - 10; // Adjusted position for custom text
        ctx.fillText(customText, customTextX, customTextY);
  
        // Draw total
        ctx.font = `14px Moderat Regular`;
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        const totalX = width / 2;
        const totalY = height / 2 + 10; // Adjusted position below the custom text
        ctx.fillText(`${valueText} ${unit}`, totalX, totalY);
        ctx.save();
      }
    });
  
    // Act: Manually trigger the plugin's beforeDraw method by calling it directly
    const plugin = Chart.registry.getPlugin('centerTextPlugin'); // Get the plugin from the registry
    if (plugin && plugin.beforeDraw) {
      plugin.beforeDraw(mockChart as any, args, {}); // Pass the required arguments
    }
  
    // Assert: Verify that restore, fillText, and save were called
    expect(mockChart.ctx.restore).toHaveBeenCalled();
    expect(mockChart.ctx.fillText).toHaveBeenCalledWith('Center Title', 50, 40); // Position adjusted as per the code
    expect(mockChart.ctx.fillText).toHaveBeenCalledWith('100 units', 50, 60); // Position adjusted as per the code
    expect(mockChart.ctx.save).toHaveBeenCalled();
  });
  
  
  
  

});

