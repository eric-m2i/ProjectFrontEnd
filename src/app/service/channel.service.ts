import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChannelDTO } from '../model/channel/channelDTO.model';
import { ChannelPostDTO } from '../model/channel/channelPostDTO.model';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  private baseUrl = 'http://localhost:8080/api/channels';
  selectChannel: number = 0;
  channels: ChannelDTO[] = [];

  constructor(private http: HttpClient) {}

  getAllChannels(): Observable<ChannelDTO[]> {
    return this.http.get<ChannelDTO[]>(`${this.baseUrl}`);
  }

  getChannelById(channelId: number): Observable<ChannelDTO> {
    return this.http.get<ChannelDTO>(`${this.baseUrl}/${channelId}`);
  }

  createChannel(channelNew: ChannelPostDTO): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<string>(`${this.baseUrl}`, channelNew);
  }

  putChannel(channelId: number, channelPut: ChannelPostDTO): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${channelId}`, channelPut);
  }

  patchChannel(channelId: number, channelPach: ChannelPostDTO): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}/${channelId}`, channelPach);
  }

  deleteChannel(channelId: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/${channelId}`);
  }
}
