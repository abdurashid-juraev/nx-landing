import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from './token.service';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  // TokenService-dagi isAuthenticated() metodidan foydalanamiz
  if (tokenService.isAuthenticated()) {
    return true; // Ruxsat beriladi
  } else {
    // Foydalanuvchi login qilmagan bo'lsa, login sahifasiga yo'naltiramiz
    router.navigate(['/login']);
    return false; // Sahifaga kirish taqiqlanadi
  }
};
