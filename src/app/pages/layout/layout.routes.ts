import { Route } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./').then((m) => m.LayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('../dashboard').then((m) => m.DashboardComponent),
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('../reports/').then((m) => m.ReportsComponent),
      },
    ],
  },
] satisfies Route[];
