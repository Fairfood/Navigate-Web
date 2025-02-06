import { Routes } from '@angular/router';
import { authGuard } from './shared/guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/layout/layout.routes'),
    canActivate: [authGuard],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/page-not-found').then((m) => m.PageNotFoundComponent),
  },
];
