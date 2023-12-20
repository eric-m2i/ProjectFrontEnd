import { Component } from '@angular/core';
import { UserDTO } from '../../model/user/userDTO.model';
import { UserService } from '../../service/user.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

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
    nom: 'ROBIN',
    prenom: 'Eric',
    email: '',
    pseudo: '',
    messages: []
  };

  checkUser() {
    this.user.loadUsers(this.inputUser);
  }


}
