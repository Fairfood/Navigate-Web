import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../../feature/header';
import { SidebarComponent } from '../../feature/sidebar';
import { LoaderComponent } from 'fairfood-utils';
import { Location } from '@angular/common';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router } from '@angular/router';
import { of, Subject, throwError } from 'rxjs';
import { ApiService, AuthService, StorageService } from 'src/app/shared/services';
import { DashboardService } from 'src/app/shared/services/dashboard-service/dashboard.service';
import { DataService } from 'src/app/shared/services/data/data.service';
import { LOADER_TEXT } from 'src/app/shared/configs/app.constants';

describe('LayoutComponent', () => {
    let component: LayoutComponent;
    let fixture: ComponentFixture<LayoutComponent>;
    let mockApiService: jasmine.SpyObj<ApiService>;
    let mockAuthService: jasmine.SpyObj<AuthService>;
    let mockDashboardService: jasmine.SpyObj<DashboardService>;
    let mockRouter: jasmine.SpyObj<Router>;
    let mockStorageService: jasmine.SpyObj<StorageService>;
    let mockDataService: jasmine.SpyObj<DataService>;
    let mockActivatedRoute: Partial<ActivatedRoute>;

    beforeEach(async () => {
        mockApiService = jasmine.createSpyObj('ApiService', ['getCompanies', 'getThemes', 'getIdToken', 'getCompanyData']);
        mockAuthService = jasmine.createSpyObj('AuthService', ['setUserData', 'logoUrl', 'getIdToken']);
        mockDashboardService = jasmine.createSpyObj('DashboardService', ['setCompaniesData', 'SelectedCompanyId']);
        mockRouter = jasmine.createSpyObj('Router', ['navigate']);
        mockStorageService = jasmine.createSpyObj('StorageService', ['saveInStorage']);
        mockDataService = jasmine.createSpyObj('DataService', ['setCompanyData']);
        const mockCode = 'someMockCode';

        mockActivatedRoute = {
            snapshot: {
                queryParamMap: {
                    get: jasmine.createSpy('get').and.returnValue(mockCode),
                    has: jasmine.createSpy('has').and.returnValue(true),
                    getAll: jasmine.createSpy('getAll').and.returnValue([mockCode]),
                    keys: ['code'],
                } as ParamMap,
                paramMap: {} as ParamMap,
                url: [],
                params: {},
                queryParams: { code: mockCode },
                fragment: null,
                data: {},
                outlet: 'primary',
                component: null,
                routeConfig: null,
                root: {} as ActivatedRouteSnapshot,
                parent: null,
                firstChild: null,
                children: [],
                pathFromRoot: [],
                title: undefined,
            } as ActivatedRouteSnapshot,
        };

        mockAuthService.getIdToken.and.returnValue(of('id_token')); 

        await TestBed.configureTestingModule({
            imports: [LayoutComponent, HeaderComponent, SidebarComponent, LoaderComponent],
            providers: [
                { provide: ApiService, useValue: mockApiService },
                { provide: AuthService, useValue: mockAuthService },
                { provide: DashboardService, useValue: mockDashboardService },
                { provide: Router, useValue: mockRouter },
                { provide: StorageService, useValue: mockStorageService },
                { provide: DataService, useValue: mockDataService },
                { provide: ActivatedRoute, useValue: mockActivatedRoute },
                { provide: Location, useValue: jasmine.createSpyObj('Location', ['']) },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should call initToken in ngOnInit', () => {
        spyOn(component, 'initToken');
        component.ngOnInit();
        expect(component.initToken).toHaveBeenCalled();
    });

    it('should call getCompanyData when no code is present in query params', () => {
        spyOn(component, 'getCompanyData');
        component.initToken();
        expect(component.getCompanyData).toHaveBeenCalled();
    });

    it('should handle errors and set loadPage to true in fetchCompanies', () => {
        mockApiService.getCompanies.and.returnValue(throwError(() => new Error('API Error')));
        component.fetchCompanies();
        expect(component.loadPage).toBeTrue();
    });

    it('should update company data and navigate to dashboard in getThemes', () => {
        const mockData = { id: 'mockId' };
        const mockThemeResponse = {
            title: 'mockTitle',
            sub_title: 'mockSubtitle',
            description: 'mockDescription',
        };
        mockApiService.getThemes.and.returnValue(of(mockThemeResponse));

        component.getThemes(mockData);

        expect(mockDashboardService.setCompaniesData).toHaveBeenCalledWith({
            ...mockData,
            ...mockThemeResponse,
        });
        expect(component.loadPage).toBeTrue();
        expect(mockRouter.navigate).toHaveBeenCalledWith(['/dashboard']);
    });

    it('should complete destroy$ subject in ngOnDestroy', () => {
        spyOn(component['destroy$'], 'next');
        spyOn(component['destroy$'], 'complete');
        component.ngOnDestroy();
        expect(component['destroy$'].next).toHaveBeenCalled();
        expect(component['destroy$'].complete).toHaveBeenCalled();
    });

    it('should call getCompanyData and handle response correctly', () => {
        // Arrange
        const mockResponse = {
            data: {
                default_company: 'mockCompanyId',
            },
        };
        mockApiService.getCompanyData.and.returnValue(of(mockResponse));
    
        // No need to spy again on methods that were already spied upon in beforeEach
        spyOn(component, 'fetchCompanies');
    
        // Act
        component.getCompanyData();
    
        // Assert
        expect(mockApiService.getCompanyData).toHaveBeenCalled();
        expect(mockDataService.setCompanyData).toHaveBeenCalledWith(mockResponse.data);
        expect(mockStorageService.saveInStorage).toHaveBeenCalledWith('entityId', 'mockCompanyId');
        expect(mockDashboardService.SelectedCompanyId).toHaveBeenCalledWith('mockCompanyId');
        expect(component.fetchCompanies).toHaveBeenCalled();
    });
        
    
    
    // it('should handle error when getCompanyData fails', () => {
    //     // Arrange
    //     mockApiService.getCompanyData.and.returnValue(throwError(() => new Error('API Error')));
        
    //     // Act
    //     component.getCompanyData();
        
    //     // Assert
    //     expect(mockApiService.getCompanyData).toHaveBeenCalled(); // Check that the method was called
    //     // Assert that no further methods were called as the error prevents them
    //     expect(mockDataService.setCompanyData).not.toHaveBeenCalled();
    //     expect(mockStorageService.saveInStorage).not.toHaveBeenCalled();
    //     expect(mockDashboardService.SelectedCompanyId).not.toHaveBeenCalled();
    //     expect(component.fetchCompanies).not.toHaveBeenCalled();
    // });
    
});
