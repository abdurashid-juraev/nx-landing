import { Route } from '@angular/router';
export const appRoutes: Route[] = [
  {
    path: 'login',
    loadComponent: () => import('@org/feature-auth').then((m) => m.FeatureAuth)
  }
];
