import { Channel } from "../chanel/chanel.model";
import { User } from "../user/user.model";

export interface Message {
    id: number;
    content: string;
    timestamp: string; 
    channel: Channel;
    user: User;
  }