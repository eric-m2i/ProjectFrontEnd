
import { ChannelDTO } from '../model/channel/channelDTO.model';
import { MessageDTO } from '../model/message/messageDTO.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  listChannel: ChannelDTO[]=[];
  listMessage: MessageDTO[]=[];


  constructor(private http: HttpClient) {
    this.loadChannels();
  }
  ngOnInit(){
    this.loadChannels();
    this.loadMessages();
    console.log(this.listChannel);
    console.log(this.listMessage);
  }

  getChannels() {
    return this.http.get('http://localhost:8080/api/channels');
  }

  private baseUrl = 'http://localhost:8080/api/channels';
  getMessagesByChannel(channelId: number): Observable<MessageDTO[]> {
    return this.http.get<MessageDTO[]>(`${this.baseUrl}/${channelId}/messages`);
  }


  loadChannels() {
    this.http.get<ChannelDTO[]>('http://localhost:8080/api/channels').subscribe(
      (data) => {
        this.listChannel = data;
        console.log(data)
      });
  }


  getMessages(){
    return this.http.get('http://localhost:8080/api/channels/1/messages');
  }
  
  loadMessages(){
    this.http.get<MessageDTO[]>('http://localhost:8080/api/channels/1/messages').subscribe(
    (data)=>{
      this.listMessage=data;
       console.log(data)});
    }

}
