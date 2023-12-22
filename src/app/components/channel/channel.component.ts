import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChannelService } from '../../service/channel.service';
import { ChannelDTO } from '../../model/channel/channelDTO.model';
import { AddChannelComponent } from '../add-channel/add-channel.component';
import { MessageService } from '../../service/message.service';
import { MessageDTO } from '../../model/message/messageDTO.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-channel',
  standalone: true,
  imports: [CommonModule, AddChannelComponent, FormsModule],
  templateUrl: './channel.component.html',
  styleUrl: './channel.component.css'
})


export class ChannelComponent {


  constructor(public channel: ChannelService, private messageService: MessageService) { }

  ngOnInit() {
    this.channel.getAllChannels().subscribe((data) => {
      this.channel.channels = data.sort((a, b) => a.id - b.id);
      this.selectedChannel(1);
    });
  }

  deleteChannel(channelId: number) {
    this.channel.deleteChannel(channelId).subscribe(() => {
      this.syncChannel();
      this.recupMessage(channelId);
    });
  }

  syncChannel() {
    this.channel.getAllChannels().subscribe((data) => {
      this.channel.channels = data.sort((a, b) => a.id - b.id);
    });
  }

  selectedChannel(channelId: number) {
    this.channel.getChannelById(channelId).subscribe(() => {
      this.channel.selectChannel = channelId;
      this.recupMessage(channelId);
    })
  }

  recupMessage(channelId: number) {
    this.messageService.getMessagesByChannel(channelId).subscribe((data: MessageDTO[]) => {
      this.messageService.messages = data;
    });
  }

  edit: boolean = false;
  editChannel!: ChannelDTO;
  editChannelPostDTO: any = { name: '', description: '' };
  selectedEditChannel(channelId: number) {
    this.channel.getChannelById(channelId).subscribe((data) => {
      this.editChannel = data;
      this.editChannelPostDTO.name = this.editChannel.name;
      this.editChannelPostDTO.description = this.editChannel.description;
      this.edit = true;
    })
  }
  selectPatchChannel() {
    if (this.editChannelPostDTO.name!='') {
      this.channel.patchChannel(this.editChannel.id, this.editChannelPostDTO)
        .subscribe(() => {
          this.syncChannel();
          this.edit = false;
          this.recupMessage(this.editChannel.id);
        });
    }
  }
  // onClick() {
  //   this.fetcher.getChannels().subscribe((data) => console.log(data));

  // }
}
