import { Channel } from '../model/channel/channel.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FetcherService {
  listChannel: Channel[] = [];

  constructor(private http: HttpClient) {
    this.loadChannels();
  }

  getChannels() {
    return this.http.get('http://localhost:8080/api/channels');
  }

  loadChannels() {
    this.http.get<Channel[]>('http://localhost:8080/api/channels').subscribe(
      (data) => {
        this.listChannel = data;
        console.log(data)
      });
  }

}
