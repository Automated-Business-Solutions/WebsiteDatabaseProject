import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class LoginComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);
  authService = inject(AuthService);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  errorMessage: string | null = null;

  onSubmit(): void {
  const rawForm = this.form.getRawValue();
  console.log('Formulario enviado:', rawForm);

  this.authService.login(rawForm.email, rawForm.password).subscribe({ 
    next: () => {
      console.log('Login exitoso');
      this.router.navigateByUrl('/user_dashboard'); 
    },
    error: (err) => {
      console.error('Error en el login:', err);

      // Verifica si el objeto de error tiene una estructura esperada
      if (err && err.error && err.error.message) {
        this.errorMessage = err.error.message;
      } else if (err && err.message) {
        this.errorMessage = err.message;
      } else {
        this.errorMessage = 'Ocurrió un error desconocido';
      }
    }
  });
}
}