import { Component, effect, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@org/data-access-auth';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
@Component({
  selector: 'lib-feature-auth',
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    PasswordModule
  ],
  templateUrl: './feature-auth.html',
  styleUrl: './feature-auth.css'
})
export class FeatureAuth {
  private readonly formBuildder = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  protected readonly isLoading = this.authService.isLoading;
  protected readonly errorMessage = this.authService.error;
  protected readonly isAuthenicated = this.authService.isAuthenticated;

  protected readonly loginForm = this.formBuildder.nonNullable.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor() {
    effect(() => {
      if (this.isAuthenicated()) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const creadentials = this.loginForm.getRawValue();
    this.authService.login(creadentials);
  }
}
