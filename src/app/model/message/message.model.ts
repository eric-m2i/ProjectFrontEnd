import { Channel } from "../channel/channel.model";
import { User } from "../user/user.model";

export interface Message {
  id: number;
  content: string;
  timestamp: string;
  channel: Channel;
  user: User;
}
