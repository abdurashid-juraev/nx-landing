import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from './token.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const token = tokenService.getToken();

  // Agar token mavjud bo'lsa, request-ni klonlab, Header-ga Bearer token qo'shamiz
  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }

  // Agar token bo'lmasa, so'rovni o'zgarishsiz davom ettiramiz
  return next(req);
};
