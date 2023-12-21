import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FetcherService } from '../../service/fetcher.service';
import { ChannelService } from '../../service/channel.service';
import { ChannelDTO } from '../../model/channel/channelDTO.model';
import { AddChannelComponent } from '../add-channel/add-channel.component';


@Component({
  selector: 'app-channel',
  standalone: true,
  imports: [CommonModule, AddChannelComponent],
  templateUrl: './channel.component.html',
  styleUrl: './channel.component.css'
})


export class ChannelComponent {

  Channels!: ChannelDTO[];

  constructor(private channel:ChannelService
    // private fetcher:FetcherService
    ) {}

  ngOnInit() {
    this.channel.getAllChannels().subscribe((data) => {
      this.Channels = data;
    });
  }

  deleteChannelC(channelId: number) {
    this.channel.deleteChannel(channelId).subscribe((data) => {
      console.log(data);
    });
  }

  // onClick() {
  //   this.fetcher.getChannels().subscribe((data) => console.log(data));

  // }
}
