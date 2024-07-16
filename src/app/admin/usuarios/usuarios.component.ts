import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

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



}
