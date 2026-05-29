import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@org/data-access-auth';
@Component({
  selector: 'lib-feature-auth',
  imports: [ReactiveFormsModule],
  templateUrl: './feature-auth.html',
  styleUrl: './feature-auth.css'
})
export class FeatureAuth {
  private readonly formBuildder = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  protected readonly loginForm = this.formBuildder.nonNullable.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
}
