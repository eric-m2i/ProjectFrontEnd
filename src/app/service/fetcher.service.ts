
import { ChannelDTO } from '../model/channel/channelDTO.model';
import { Message } from '../model/message/message.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  listChannel: ChannelDTO[]=[];
  listMessage: Message[]=[];


  constructor(private http: HttpClient) {
    this.loadChannels();
  }

  getChannels() {
    return this.http.get('http://localhost:8080/api/channels');
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
    this.http.get<ChannelDTO[]>('http://localhost:8080/api/channels').subscribe(
    (data)=>{this.listChannel=data;
       console.log(data)});
    }

}
