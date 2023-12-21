import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDTO } from '../model/user/userDTO.model';
import { UserPostDTO } from '../model/user/userPostDTO.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(`${this.baseUrl}`);
  }

  getUserById(userId: number): Observable<UserDTO> {
    return this.http.get<UserDTO>(`${this.baseUrl}/${userId}`);
  }

  createUser(user: UserPostDTO): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}`, user);
  }

  userListe!: UserDTO[];

  userListeFiltree!: UserDTO[];

  user!: UserDTO ;

  loadUsers(userSaisie: UserDTO) {
      this.getAllUsers().subscribe((data: UserDTO[]) => {
      this.userListe = data;
      this.userListeFiltree = this.userListe;
      this.getUserDTO(userSaisie);
    });
  }

  getUserDTO(userSaisie: UserDTO) {
    this.userListeFiltree = this.userListe.filter((userDTO: UserDTO) =>
      ((userDTO.pseudo === userSaisie.pseudo) && (userDTO.email === userSaisie.email)));
    if (this.userListeFiltree.length > 0) {
      this.user = this.userListeFiltree[0];
      console.log(this.user);
    }
  }

  
}