import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageDTO } from '../model/message/messageDTO.model';
import { MessagePostDTO } from '../model/message/messagePostDTO.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private baseUrl = 'http://localhost:8080/api/channels';

  constructor(private http: HttpClient) {}

  getMessagesByChannel(channelId: number): Observable<MessageDTO[]> {
    return this.http.get<MessageDTO[]>(`${this.baseUrl}/${channelId}/messages`);
  }

  addMessage(channelId: number, userId: number, message: MessagePostDTO): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<string>(`${this.baseUrl}/${channelId}/users/${userId}/messages`,message)
  }
}
