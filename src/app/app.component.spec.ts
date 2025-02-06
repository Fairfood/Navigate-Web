import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AuthService } from './shared/services/auth.service';
import { RouterOutlet } from '@angular/router';


describe('AppComponent', () => {
    let component: AppComponent;
    let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['removeUserData']);

    TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
      ],
    })

    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call removeUserData when isUserLoggedIn returns false', () => {
    // Arrange
    spyOn(component, 'isUserLoggedIn').and.returnValue(false);

    // Act
    component.checkUserLoginStatus();

    // Assert
    expect(authServiceSpy.removeUserData).toHaveBeenCalled();
  });

  it('should not call removeUserData when isUserLoggedIn returns true', () => {
    // Arrange
    spyOn(component, 'isUserLoggedIn').and.returnValue(true);

    // Act
    component.checkUserLoginStatus();

    // Assert
    expect(authServiceSpy.removeUserData).not.toHaveBeenCalled();
  });


  it('should return true if the "isFairfoodUserLoggedIn" cookie is present', () => {
    // Arrange: Set up a mock cookie
    Object.defineProperty(document, 'cookie', {
      value: 'isFairfoodUserLoggedIn=true; someOtherCookie=value', 
      writable: true,
    });

    // Act
    const result = component.isUserLoggedIn();

    // Assert
    expect(result).toBeTrue();
  });

  it('should return false if the "isFairfoodUserLoggedIn" cookie is not present', () => {
    // Arrange: Set up a mock cookie without the 'isFairfoodUserLoggedIn' key
    Object.defineProperty(document, 'cookie', {
      value: 'someOtherCookie=value', 
      writable: true,
    });

    // Act
    const result = component.isUserLoggedIn();

    // Assert
    expect(result).toBeFalse();
  });
  

  it('should call checkUserLoginStatus every 5 seconds', (done) => {
    spyOn(component, 'checkUserLoginStatus');
  
    setTimeout(() => {
      expect(component.checkUserLoginStatus).toHaveBeenCalledTimes(1);
      done();
    }, 5500); // Give it a bit more time to account for any minor delays
  }, 6000); // Increase Jasmine's timeout interval
  
  
});
