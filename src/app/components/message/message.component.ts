import { Message } from '../../model/message.model';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TemplateServiceService } from '../../service/template-service.service';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {

  constructor(public message:TemplateServiceService) {}
}
