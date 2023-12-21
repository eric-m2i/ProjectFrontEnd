import { Component, Input } from '@angular/core';
import { UserDTO } from '../../model/user/userDTO.model';
import { UserService } from '../../service/user.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { UserPostDTO } from '../../model/user/userPostDTO.model';

@Component({
  selector: 'app-connexion',
  standalone: true,
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css',
  imports: [FormsModule, HeaderComponent, FooterComponent]
})
export class ConnexionComponent {

  constructor(private user: UserService) { }

  inputUser: UserDTO = {
    id: 0,
    nom: 'Robin',
    prenom: 'Eric',
    email: '',
    pseudo: '',
    messages: []
  };

  registerUser: UserPostDTO = {nom: '', prenom: '', email: '', pseudo: ''};

  checkUser() {
    this.user.loadUsers(this.inputUser);
  }

  regUser() {
    this.user.createUser(this.registerUser).subscribe((data: string) => {
      console.log(data);
    });
  }
}

