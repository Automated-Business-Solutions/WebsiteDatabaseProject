import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  afAuth: any;

  constructor(private _authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.afAuth.auth.singOut();
  }

}
