import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit {

  authService = inject(AuthService);
  router = inject(Router)

  ngOnInit(): void{
    this.authService.user$.subscribe(user => {
      if (user)  {
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,
          uid: user.uid!,
           

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
}
