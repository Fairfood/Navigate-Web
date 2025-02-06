// core/auth.guard.ts
import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { environment } from 'src/environments/environment';
import { StorageService } from '../services';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const storage = inject(StorageService);
  const token = storage.retrieveStoredData('id_token');
  const loggedIn = storage.retrieveStoredData('isNavigateUserLoggedIn');
  // first time login
  if (state.url.includes('?code=')) {
    return true;
  } else {
    if (token && loggedIn) {
      return true;
    }

    toLogin();
    return false;
  }
};

const toLogin = (): void => {
  window.location.href = environment.authenticateUrl;
};
