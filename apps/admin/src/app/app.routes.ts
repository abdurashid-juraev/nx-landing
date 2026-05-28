import { authGuard } from '@org/auth';

import { Route } from '@angular/router';
export const appRoutes: Route[] = [
  {
    path: 'login',
    loadComponent: () => import('@org/feature-auth').then((m) => m.FeatureAuth)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('@org/feature-dashboard').then((m) => m.FeatureDashboard),
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
