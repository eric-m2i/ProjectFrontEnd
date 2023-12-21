import { AddMessageComponent } from './../add-message/add-message.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TemplateServiceService } from '../../service/template-service.service';
import { FetcherService } from '../../service/fetcher.service';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule, AddMessageComponent],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})


export class MessageComponent {
  ngOnInit(){
    this.message.loadChannels();
    this.message.loadMessages();
    console.log(this.message.listChannel);
    console.log(this.message.listMessage);
  }
  constructor(public message:FetcherService) {}


}
