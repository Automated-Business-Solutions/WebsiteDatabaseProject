import { Component, OnInit, inject,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

}

