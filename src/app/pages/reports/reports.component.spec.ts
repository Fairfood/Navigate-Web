import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportsComponent } from './reports.component';
import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service';
import { of } from 'rxjs';

describe('ReportsComponent', () => {
  let component: ReportsComponent;
  let fixture: ComponentFixture<ReportsComponent>;
  let dashboardServiceMock: jasmine.SpyObj<DashboardService>;

  beforeEach(() => {
    // Create a mock instance of DashboardService
    dashboardServiceMock = jasmine.createSpyObj('DashboardService', ['updateSelectedTab', 'setUnit']);
    
    // Configure the testing module
    TestBed.configureTestingModule({
      imports: [ReportsComponent],
      providers: [
        { provide: DashboardService, useValue: dashboardServiceMock }
      ]
    });

    // Create the component and trigger change detection
    fixture = TestBed.createComponent(ReportsComponent);
    component = fixture.componentInstance;
  });

  it('should call updateSelectedTab and setUnit on ngOnInit', () => {
    // Act: Trigger ngOnInit by detecting changes
    component.ngOnInit();

    // Assert: Check if methods were called on the service
    expect(dashboardServiceMock.updateSelectedTab).toHaveBeenCalledWith('DEFORESTATION');
    expect(dashboardServiceMock.setUnit).toHaveBeenCalledWith(1);
  });
});
