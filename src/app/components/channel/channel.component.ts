import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FetcherService } from '../../service/fetcher.service';
import { ChannelService } from '../../service/channel.service';
import { ChannelDTO } from '../../model/channel/channelDTO.model';
import { AddChannelComponent } from '../add-channel/add-channel.component';
import { MessageService } from '../../service/message.service';
import { MessageDTO } from '../../model/message/messageDTO.model';

@Component({
  selector: 'app-channel',
  standalone: true,
  imports: [CommonModule, AddChannelComponent],
  templateUrl: './channel.component.html',
  styleUrl: './channel.component.css'
})


export class ChannelComponent {


  constructor(public channel:ChannelService,private messageService: MessageService
    // private fetcher:FetcherService
    ) {}

  ngOnInit() {
    this.channel.getAllChannels().subscribe((data) => {
      this.channel.channels = data.sort((a,b)=> a.id - b.id );
    });
  }

  deleteChannelC(channelId: number) {
    this.channel.deleteChannel(channelId).subscribe((data) => {
      console.log(data);
      this.syncChannel();
    });
  }

  syncChannel(){
    this.channel.getAllChannels().subscribe((data) => {
      this.channel.channels = data.sort((a,b)=> a.id - b.id );
    });
  }

  selectedChannel(channelId: number) {
    this.channel.getChannelById(channelId).subscribe((data) => {
      this.messageService;
      this.channel.selectChannel = channelId;
      this.recupMessage(channelId);
    })
  }

  recupMessage(channelId: number){
    this.messageService.getMessagesByChannel(channelId).subscribe((data:MessageDTO[])=>{
      this.messageService.messages = data;
      console.log(data);
    });
  }

  // onClick() {
  //   this.fetcher.getChannels().subscribe((data) => console.log(data));

  // }
}
