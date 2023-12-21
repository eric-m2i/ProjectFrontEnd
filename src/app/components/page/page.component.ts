import { Component } from '@angular/core';
import { ChannelComponent } from '../channel/channel.component';
import { MessageComponent } from '../message/message.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';



@Component({
  selector: 'app-page',
  standalone: true,
  imports: [HeaderComponent, ChannelComponent,  FooterComponent, MessageComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {

}
