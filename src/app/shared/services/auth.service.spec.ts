import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';
import { StorageService } from './storage.service';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApplicationApi } from '../configs/app.constants';
import { IRefreshTokenApi, IdTokenRequest, IdTokenResponse } from '../configs/app.model';

describe('AuthService', () => {
    let service: AuthService;
    let httpMock: HttpTestingController;
    let storageService: jasmine.SpyObj<StorageService>;
    let jwtHelperService: jasmine.SpyObj<JwtHelperService>;
    let refreshTokenSpy: jasmine.Spy;


    beforeEach(() => {
        // Create spy objects for services
        storageService = jasmine.createSpyObj('StorageService', ['saveInStorage', 'retrieveStoredData', 'clearStorage']);
        jwtHelperService = jasmine.createSpyObj('JwtHelperService', ['getTokenExpirationDate']);

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                AuthService,
                { provide: StorageService, useValue: storageService },
                { provide: JwtHelperService, useValue: jwtHelperService },
            ],
        });

        service = TestBed.inject(AuthService);
        httpMock = TestBed.inject(HttpTestingController);
        refreshTokenSpy = spyOn(service, 'refreshToken').and.returnValue(of(null));

    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should schedule token refresh correctly', fakeAsync(() => {
        const mockToken = 'mockJwtToken';
        const expirationDate = new Date();
        expirationDate.setMinutes(expirationDate.getMinutes() + 10); // Set token expiration 10 minutes from now
    
        // Spy on the getTokenExpirationDate method to return the expiration date
        jwtHelperService.getTokenExpirationDate.and.returnValue(expirationDate);
    
        // Call the method to schedule the refresh
        service.scheduleTokenRefresh(mockToken);
    
        // Calculate the timeout delay
        const timeoutDelay = expirationDate.getTime() - Date.now() - service.TOKEN_EXPIRY_THRESHOLD_MINUTES * 60 * 1000;
    
        // Advance time using `tick()`
        tick(timeoutDelay);
    
        // Now, check if refreshToken was called
        expect(refreshTokenSpy).toHaveBeenCalled();
    }));
    


    describe('getIdToken', () => {
        it('should make a POST request with the correct parameters', () => {
            const mockRequest: IdTokenRequest = {
                code: 'mockCode',
                client_id: 'mockClientId',
                client_secret: 'mockClientSecret',
                redirect_uri: 'mockRedirectUri',
                grant_type: 'authorization_code'
            };

            const mockResponse = { access_token: 'mockAccessToken', id_token: 'mockIdToken' };

            service.getIdToken(mockRequest).subscribe(response => {
                expect(response).toEqual(mockResponse);
            });

            const req = httpMock.expectOne(`${environment.ssoAPIUrl}${ApplicationApi.TOKEN}`);

            // Check if the method used is POST
            expect(req.request.method).toBe('POST');

            // Check if the body contains the URL-encoded params from the request object
            const encodedParams = new URLSearchParams(Object.entries(mockRequest)).toString();
            expect(req.request.body).toBe(encodedParams);

            // Provide the mock response
            req.flush(mockResponse);
        });
    });

    // it('should set user data correctly', () => {
    //     // Sample token data for testing
    //     const mockToken: IdTokenResponse = {
    //         access_token: 'mockAccessToken',
    //         refresh_token: 'mockRefreshToken',
    //         id_token: 'mockIdToken'
    //     };

    //     // Create a spy to intercept document.cookie set operation
    //     let cookieValue = '';
    //     spyOnProperty(document, 'cookie', 'set').and.callFake((value: string) => {
    //         cookieValue = value; // Capture the cookie value when set
    //     });

    //     // Call the setUserData method with mock token data
    //     service.setUserData(mockToken);

    //     // Check if saveInStorage is called with the correct keys and values
    //     expect(storageService.saveInStorage).toHaveBeenCalledWith('isNavigateUserLoggedIn', 'true');
    //     expect(storageService.saveInStorage).toHaveBeenCalledWith('access_token', mockToken.access_token);
    //     expect(storageService.saveInStorage).toHaveBeenCalledWith('refresh_token', mockToken.refresh_token);
    //     expect(storageService.saveInStorage).toHaveBeenCalledWith('id_token', mockToken.id_token);

    //     // Verify that the cookie was set with the expected value
    //     const expiryDate = new Date();
    //     expiryDate.setFullYear(expiryDate.getFullYear() + 100);
    //     const expectedCookie = `isFairfoodUserLoggedIn=true;path=/;expires=${expiryDate.toUTCString()};secure;`;

    //     expect(cookieValue).toContain('isFairfoodUserLoggedIn=true');
    //     expect(cookieValue).toContain('path=/');
    //     expect(cookieValue).toContain(`expires=${expiryDate.toUTCString()}`);
    //     expect(cookieValue).toContain('secure');

    // });

      
});
