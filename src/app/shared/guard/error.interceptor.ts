import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

export const httpErrorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error) {
        switch (error.status) {
          case 403:
             ('Forbidden');
            window.location.href = `${environment.authUrl}`;
            break;
          case 401:
             ('Unauthorized');
            window.location.href = `${environment.authUrl}`;
            break;
          default:
             console.log('Error', error);
            break;
        }
      }
      return throwError(() => error);
    })
  );
};
