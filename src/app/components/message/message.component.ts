import { UserService } from './../../service/user.service';
import { ChannelService } from './../../service/channel.service';
import { MessageDTO } from './../../model/message/messageDTO.model';
import { AddMessageComponent } from './../add-message/add-message.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TemplateServiceService } from '../../service/template-service.service';
import { FetcherService } from '../../service/fetcher.service';
import { MessageService } from '../../service/message.service';
import { FormsModule } from '@angular/forms';
import { MessagePostDTO } from '../../model/message/messagePostDTO.model';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule, AddMessageComponent, FormsModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})


export class MessageComponent {
  ngOnInit(){
    this.fetcherService.loadChannels();
    this.message.getMessagesByChannel(this.inputMessage.channel.id).subscribe((data:MessageDTO[])=>{
      this.message.messages = data;
      console.log(data);
    });
    console.log(this.fetcherService.listChannel);
    console.log(this.fetcherService.listMessage);
  }
  constructor(private datePipe: DatePipe,public message: MessageService,private fetcherService: FetcherService,private channelService: ChannelService,private userService: UserService){}

  inputMessage: MessagePostDTO = {
    content:'',
    timestamp:'',
    channel: {id:1},
    user:{id:1},

  }

  addMessage(){
    console.log(this.inputMessage);
    this.inputMessage.user.id = this.userService.user.id;
    this.inputMessage.channel.id = this.channelService.selectChannel;
    this.message.addMessage(this.inputMessage.channel.id,this.inputMessage.user.id,this.inputMessage).subscribe(
      (rep) => {
      console.log(rep),
      this.recupMessage()
    });

    this.inputMessage.content = '';
  };

  recupMessage() {
    this.message.getMessagesByChannel(this.inputMessage.channel.id).subscribe((data: MessageDTO[]) => {
      this.message.messages = data;
      // this.message.messages.forEach(m => {
      //   const formattedTimestamp = this.convertTimestamp(m.timestamp);
      //   if (formattedTimestamp !== null) {
      //     m.timestamp = formattedTimestamp;
      //   } else {
      //     m.timestamp = 'Timestamp invalide';
      //   }
      // });
      console.log(data);
    });
  }
  
  // convertTimestamp(timestamp: string): string|null{
  //   const timestampArray = timestamp.split(',').map(Number);
  //   const date = new Date(timestampArray[0], timestampArray[1] - 1, timestampArray[2], timestampArray[3], timestampArray[4], timestampArray[5], timestampArray[6]);
  //   return this.datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
  // }
}
