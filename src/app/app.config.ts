import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
} from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { AuthService } from './shared/services';
import { routes } from './app.routes';
import { httpErrorInterceptor } from './shared/guard';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(withInterceptors([httpErrorInterceptor])),
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: initializerFactory,
      multi: true,
      deps: [AuthService],
    },
    importProvidersFrom([
      JwtModule.forRoot({
        config: {
          tokenGetter: () => localStorage.getItem('id_token'),
        },
      }),
    ]),
  ],
};

export function initializerFactory(authService: AuthService) {
  return () => authService.refreshToken();
}
