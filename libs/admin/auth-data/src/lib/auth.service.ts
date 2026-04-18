import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { LoginRequest } from './models';
import { catchError, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  // State boshqaruvi uchun Signals
  readonly currentUser = signal<LoginRequest | null>(null);
  readonly isLoading = signal<boolean>(false);
  readonly error = signal<string | null>(null);

  // Computed signal - foydalanuvchi tizimga kirgan yoki kirmaganini aniqlash uchun
  readonly isAuthenticated = computed(() => this.currentUser() !== null);
  login(credentials: LoginRequest) {
    this.isLoading.set(true);
    this.error.set(null);
   return this.http
      .post<{ user: LoginRequest; token: string }>('/api/login', credentials)
      .pipe(
        tap((response) => {
          this.currentUser.set(response.user);
          localStorage.setItem('access_token', response.token);
        }),
        catchError((err) => {
          this.error.set(err.message || 'Login failed');
          return of(null);
        })
      )
      .subscribe(() => {
        this.isLoading.set(false);
      });
  }

  logout() {
    this.currentUser.set(null);
    localStorage.removeItem('access_token');
  }
}
