import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './admin/register/register.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';


export const routes: Routes = [
  {
    path: 'admin/register',
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