import { Channel } from "../channel/channel.model";
import { User } from "../user/user.model";

export interface MessagePostDTO {
  content: string;
  timestamp: string;
  channel: Channel;
  user: User;
}
