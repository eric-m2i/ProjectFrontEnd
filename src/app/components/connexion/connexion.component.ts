import { UserPostDTO } from './../../model/user/userPostDTO.model';
import { Component, Input } from '@angular/core';
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


  constructor(private user: UserService) {
  }

  inputUser: any = {
    nom: 'Robin',
    prenom: 'Eric',
  };

  registerUser: UserPostDTO = { nom: '', prenom: '', email: '', pseudo: '' };

  checkUser() {
    this.user.loadUsers(this.inputUser);
  }

  regUser() {
    if (this.controleRegister(this.registerUser)) {
      this.user.createUser(this.registerUser).subscribe((data: string) => {
        console.log(data);
        this.registerUser = { nom: '', prenom: '', email: '', pseudo: '' };
      });
    }
  }

  controleRegister(userPostDTO: UserPostDTO): boolean {
    switch (userPostDTO.nom) { case '': userPostDTO.nom = ''; return false; }
    switch (userPostDTO.prenom) { case '' : userPostDTO.prenom = ''; return false; }
    switch (userPostDTO.pseudo) { case '': userPostDTO.pseudo = ''; return false; }
    switch (userPostDTO.email) { case '': userPostDTO.email = ''; return false; }
    return true;
  }
}
