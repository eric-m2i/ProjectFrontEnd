import { Injectable } from '@angular/core';
import { UserDTO } from '../model/user/userDTO.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userListe!: UserDTO[];

  userListeFiltree!: UserDTO[];

  user!: UserDTO;

  constructor(private http: HttpClient) {
    //this.chargeUsers();
  }

  loadUsers(userSaisie: UserDTO) {
      this.getAllUsers().subscribe((data: UserDTO[]) => {
      this.userListe = data;
      this.userListeFiltree = this.userListe;
      this.getUserDTO(userSaisie);
    });
  }

  getAllUsers(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>('http://localhost:8080/api/users');
  }

  getUserDTO(userSaisie: UserDTO) {
    this.userListeFiltree = this.userListe.filter((userDTO: UserDTO) =>
      ((userDTO.pseudo === userSaisie.pseudo)));
    if (this.userListeFiltree.length > 0) {
      this.user = this.userListeFiltree[0];
      console.log(this.user);
    }
  }

}
