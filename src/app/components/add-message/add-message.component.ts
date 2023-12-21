import { MessagePostDTO } from './../../model/message/messagePostDTO.model';
import { Channel } from './../../model/channel/channel.model';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FetcherService } from '../../service/fetcher.service';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-add-channel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-message.component.html',
  styleUrl: './add-message.component.css'
})
export class AddMessageComponent {

constructor(private message: MessageService,private fetcherService: FetcherService){}

  inputMessage: MessagePostDTO = {
    content:'',
    timestamp:'',
    channel: {id:1},
    user:{id:1},

  }

  addChannel(){
    console.log(this.inputMessage);
    this.message.addMessage(1,1,this.inputMessage).subscribe((rep) => console.log(rep));
    this.fetcherService.loadMessages();
    this.inputMessage.content = '';
  };
}