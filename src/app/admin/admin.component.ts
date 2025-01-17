import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  authService = inject(AuthService);
  router = inject(Router);


  //control de usuarios.
  ngOnInit(): void{
    this.authService.user$.subscribe(user => {
      if (user)  {
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,
          uid: user.uid!
        });
      }
      else
      {
        this.authService.currentUserSig.set(null);
      }
      console.log(this.authService.currentUserSig())
    });
  }


  logOut(): void{
    this.authService.logout();
    this.router.navigate(['/login']);
  }

   navigateToUsuarios() {
    this.router.navigate(['admin/usuarios']);
  }

  navigateToLogin()
  {
    this.router.navigate(['/login'])
  }

  navigateToAdminHome()
  {
    this.router.navigate(['/admin'])
  }

  navigateToRegister()
  {
    this.router.navigate(['/admin/register'])
  }

}