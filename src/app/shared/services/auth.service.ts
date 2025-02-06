import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import {
  IRefreshTokenApi,
  IdTokenRequest,
  IdTokenResponse,
} from '../configs/app.model';
import { HTTP_OPTION_6, headerOptions } from 'fairfood-utils';
import {
  clientId,
  clientSecret,
  environment,
} from 'src/environments/environment';
// services
import { StorageService } from './storage.service';
import { ApplicationApi } from '../configs/app.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logoUrl = new BehaviorSubject<string>('');

  // Token will be refreshed 5 minutes before expiration time
  readonly TOKEN_EXPIRY_THRESHOLD_MINUTES = 5;
  private readonly jwtHelper = inject(JwtHelperService);

  constructor(private http: HttpClient, private storage: StorageService) { }

  getIdToken(reqObject: IdTokenRequest): Observable<any> {
    const encoded = new URLSearchParams(Object.entries(reqObject)).toString();
    return this.http.post(
      `${environment.ssoAPIUrl}${ApplicationApi.TOKEN}`,
      encoded,
      headerOptions(HTTP_OPTION_6)
    );
  }
/*istanbul ignore next */
  setUserData(token: IdTokenResponse): void {
    this.storage.saveInStorage('isNavigateUserLoggedIn', 'true');
    this.storage.saveInStorage('access_token', token.access_token);
    this.storage.saveInStorage('refresh_token', token.refresh_token);
    this.storage.saveInStorage('id_token', token.id_token);

    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 100);

    let domainPath = '';

    // Handle domain for local and other environments
    const currentUrl = window.location.hostname;
    if (currentUrl.includes('localhost')) {
      domainPath = 'domain=localhost;'; // Share cookies between localhost ports
    } else if (currentUrl.includes('.org')) {
      domainPath = 'domain=fairfood.org;';
    }
    else if (currentUrl.includes('.nl')) {
      domainPath = 'domain=fairfood.nl;';
    } else {
      const extractedDomain = currentUrl.split('//')[1]?.split(':')[0]?.split('/')[0];
      domainPath = extractedDomain ? `domain=${extractedDomain};` : '';
    }

    // Set cookie to indicate that the user is logged in
    document.cookie = `isFairfoodUserLoggedIn=true;${domainPath}path=/;expires=${expiryDate.toUTCString()};secure;`;
  }

  removeUserData(): void {
    this.storage.clearStorage();
    document.cookie = 'isFairfoodUserLoggedIn=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT;';
    window.location.href = `${environment.authUrl}/logout`;
  }

  refreshToken(): Observable<any> {
    const refresh_token = this.storage.retrieveStoredData('refresh_token');
    if (!refresh_token) {
      return of();
    }
    const reqObj: IRefreshTokenApi = {
      refresh_token: refresh_token,
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'refresh_token',
    };
    const encoded = new URLSearchParams(Object.entries(reqObj)).toString();
    return this.http
      .post(
        `${environment.ssoAPIUrl}${ApplicationApi.TOKEN}`,
        encoded,
        headerOptions(HTTP_OPTION_6)
      )
      .pipe(
        catchError(() => of()),
        tap((data: any) => {
          const { access_token, refresh_token, id_token } = data;
          this.storage.saveInStorage('access_token', access_token);
          this.storage.saveInStorage('refresh_token', refresh_token);
          this.storage.saveInStorage('id_token', id_token);
          this.scheduleTokenRefresh(data.access);
        })
      );
  }

  scheduleTokenRefresh(token: string): void {
    const expirationTime = this.jwtHelper
      .getTokenExpirationDate(token)
      ?.getTime();
    const refreshTime = expirationTime
      ? expirationTime - this.TOKEN_EXPIRY_THRESHOLD_MINUTES * 60 * 1000
      : Date.now();
    const refreshInterval = refreshTime - Date.now();

    if (refreshInterval > 0) {
      setTimeout(() => {
        this.refreshToken().subscribe();
      }, refreshInterval);
    }
  }
}
