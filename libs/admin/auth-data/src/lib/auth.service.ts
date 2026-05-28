import { TokenService } from '@org/auth';
import { API_URL } from '@org/env';
import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { AuthResponse, LoginRequest, User } from './models';
import { catchError, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = inject(API_URL);
  private readonly tokenService = inject(TokenService);
  // State boshqaruvi uchun Signals
  readonly currentUser = signal<User | null>(null);
  readonly isLoading = signal<boolean>(false);
  readonly error = signal<string | null>(null);

  // Computed signal - foydalanuvchi tizimga kirgan yoki kirmaganini aniqlash uchun
  readonly isAuthenticated = computed(() => this.tokenService.isAuthenticated());
  //=======================================================================
  login(credentials: LoginRequest) {
    this.isLoading.set(true);
    this.error.set(null);

    return this.http
      .post<AuthResponse>(`${this.apiUrl}/auth/login`, credentials)
      .pipe(
        tap((response) => {
          this.currentUser.set(response.user);
          this.tokenService.setToken(response.token);
        }),
        catchError((err) => {
          this.error.set(err.message || err.message || 'Login failed');
          return of(null);
        })
      )
      .subscribe(() => {
        this.isLoading.set(false);
      });
  }

  logout() {
    this.currentUser.set(null);
    this.tokenService.logout();
  }
}
