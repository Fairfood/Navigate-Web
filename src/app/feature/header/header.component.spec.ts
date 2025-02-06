import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service'
import { ApiService, AuthService } from 'src/app/shared/services';
import { DataService } from 'src/app/shared/services/data/data.service';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AvatarPipe } from './header.pipe';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { of, BehaviorSubject } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let mockDataService: jasmine.SpyObj<DataService>;
  let mockDashboardService: jasmine.SpyObj<DashboardService>;

  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['logoUrl', 'removeUserData']);
    mockDataService = jasmine.createSpyObj('DataService', ['getCompanyData']);
    mockDashboardService = jasmine.createSpyObj('DashboardService', ['SelectedCompanyId']);

    mockAuthService.logoUrl = new BehaviorSubject<string>('https://example.com/logo.png');
    mockDataService.getCompanyData.and.returnValue({
      id: "mQ8j3P8",
      username: "dinotest222+n3@gmail.com",
      first_name: "Dino",
      last_name: "n3",
      email: "dinotest222+n3@gmail.com",
      profile_image: null,
      sso_id: "mB6dDla",
      default_company: "wQp364M",
      companies: [  // Ensure the company data is correctly populated
        { id: "wQp364M", name: "Navigate 3", image: null }
      ],
      theme: "B9DEqDZ",
      calculated_farms: 0,  // Adjusted for default value
      total_farms: 0,      // Adjusted for default value
      image: undefined,    // Optional property can be undefined
      uncalculated_farms: 134 
    });

    await TestBed.configureTestingModule({
      imports: [HeaderComponent, AvatarPipe, MatIconModule, MatMenuModule, FormsModule, MatRadioModule],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: DataService, useValue: mockDataService },
        { provide: DashboardService, useValue: mockDashboardService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the HeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize logoUrl$ with AuthService logoUrl observable', () => {
    component.logoUrl$.subscribe((logoUrl) => {
      expect(logoUrl).toBe('https://example.com/logo.png');
    });
  });

  it('should fetch and process company data on getData call', () => {
    component.getData();
  
    // Log actual data for debugging
     (component.userData, 'userData after getData call');
  
    // Check company list to ensure it's correctly set
    expect(component.companyList).toEqual([
      { id: 'wQp364M', name: 'Navigate 3', image: null }
    ]);
  
  
    // Ensure selected company data is correct
    expect(component.selectedCompanyId).toBe('wQp364M');
    expect(component.selectedCompany).toEqual({ id: 'wQp364M', name: 'Navigate 3', image: null });
  });
    

  it('should call DashboardService.SelectedCompanyId with the selected company ID on changeCompany', () => {
    const companyId = 'wQp364M';
    component.changeCompany(companyId);

    expect(mockDashboardService.SelectedCompanyId).toHaveBeenCalledWith(companyId);
  });

  it('should return the ID of a company on trackById call', () => {
    const company = { id: 'wQp364M', name: 'Navigate 3' };
    expect(component.trackById(0, company)).toBe('wQp364M');
  });

  it('should call AuthService.removeUserData on logout', () => {
    component.logout();

    expect(mockAuthService.removeUserData).toHaveBeenCalled();
  });
});
