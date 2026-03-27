import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { NotificationService } from '@org/notifications';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const notificationService = inject(NotificationService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Nomaʼlum xatolik yuz berdi!';

      // Agar backend o'z xabarini yuborgan bo'lsa
      if (error.error && error.error.message) {
        errorMessage = error.error.message;
      } else if (error.status === 401) {
        errorMessage = 'Avtorizatsiya talab qilinadi';
      } else if (error.status === 500) {
        errorMessage = 'Server xatosi';
      }

      // Xatoni UI-ga (PrimeNG Toast) chiqaramiz
      notificationService.showError(errorMessage);

      return throwError(() => error);
    })
  );
};
