import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FetcherService } from '../../service/fetcher.service'; 


@Component({
  selector: 'app-channel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './channel.component.html',
  styleUrl: './channel.component.css'
})


export class ChannelComponent {

  constructor(public channel:FetcherService
    // private fetcher:FetcherService
    ) {}
  
  // onClick() {
  //   this.fetcher.getChannels().subscribe((data) => console.log(data));

  // }
}
