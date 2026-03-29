import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private _token = signal<string | null>(localStorage.getItem('auth_token'));

  readonly isAuthenticated = computed(() => !!this._token());

  getToken(): string | null {
    return this._token();
  }

  setToken(token: string): void {
    localStorage.setItem('auth_token', token);
    this._token.set(token);
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    this._token.set(null);
  }
}
