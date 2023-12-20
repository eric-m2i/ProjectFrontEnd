import { Injectable } from '@angular/core';
import  { State } from '../model/state.model';
import { User } from '../model/user.model';
import { Message } from '../model/message.model';
import { Channel } from '../model/channel.model';






@Injectable({
  providedIn: 'root'
})
export class TemplateServiceService { 
  
//   channel: Channel [] = 
//   [
//   { id: 1, 
//     name: 'News', 
//     description: 'Latest updates and news',
//   },
//   { 
//     id: 2, 
//     name: 'Tech Talk', 
//     description: 'Discussing the latest in technology',
//   },

//   {  
//     id: 3, 
//     name: 'Travel', 
//     description: 'Share your travel experiences',
// },
// ];
  


message: Message [] = 
[{id: 1, content: 'Hello, world!', timestamp: new Date() },
  {id: 2, content: 'TypeScript is awesome!', timestamp: new Date() },
  {id: 3, content: 'What are you up to?', timestamp: new Date() },];


  user: User [] = 
[{id: 1, nom: 'John', prenom: 'Doe', email: 'john.doe@example.com', pseudo: 'john_doe' },
{id: 2, nom: 'Jane', prenom: 'Doe', email: 'jane.doe@example.com', pseudo: 'jane_doe' },
{id: 3, nom: 'Alice', prenom: 'Smith', email: 'alice.smith@example.com', pseudo: 'alice_smith' },];



  constructor() { }
}
