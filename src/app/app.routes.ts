import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';


export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user_dashboard',
    component: UserDashboardComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: '', component: LoginComponent,
  },
  {
    path: 'admin/usuarios', component: UsuariosComponent,
  },
  {
    path: '**', redirectTo: 'login' ,pathMatch: 'full'

  }
];