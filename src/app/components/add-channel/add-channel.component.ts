import { ChannelPostDTO } from './../../model/channel/channelPostDTO.model';
import { Channel } from './../../model/channel/channel.model';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FetcherService } from '../../service/fetcher.service';
import { ChannelService } from '../../service/channel.service';

@Component({
  selector: 'app-add-channel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-channel.component.html',
  styleUrl: './add-channel.component.css'
})
export class AddChannelComponent {

constructor(private channel: ChannelService){}

  inputChannel: ChannelPostDTO = {
    name:'',
    description:'',
  }

  addChannel(){
    console.log(this.inputChannel);
    this.channel.createChannel(this.inputChannel).subscribe(
      (rep) => {
        console.log(rep);
        this.syncChannel();
        this.inputChannel.name ='';
        this.inputChannel.description ='';
      });
  };

  syncChannel(){
    this.channel.getAllChannels().subscribe((data) => {
      this.channel.channels = data.sort((a,b)=> a.id - b.id );
    });
  }
}
