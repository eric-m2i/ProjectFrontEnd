import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PageComponent } from '../page/page.component';
import { ConnexionComponent } from '../connexion/connexion.component';
import { UserDTO } from '../../model/user/userDTO.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PageComponent, ConnexionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template';
  connexion: boolean = false;

  constructor(public userService:UserService){};
  
  }
