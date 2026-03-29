import { authInterceptor } from '@org/auth';
import { errorInterceptor } from '@org/data-access';
import { API_URL } from '@org/env';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { MessageService } from 'primeng/api';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideTransloco } from '@jsverse/transloco';
import { TranslocoHttpLoader } from '@org/i18n';
export const appConfig: ApplicationConfig = {
  providers: [
    { provide: API_URL, useValue: 'http://localhost:3000/ap' },
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.app-dark',
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng, utilities'
          }
        }
      }
    }),
    MessageService,
    provideHttpClient(withInterceptors([errorInterceptor, authInterceptor])),
    provideTransloco({
      config: {
        availableLangs: ['en', 'uz', 'ru', 'kar'],
        defaultLang: 'uz',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode()
      },
      loader: TranslocoHttpLoader
    })
  ]
};
