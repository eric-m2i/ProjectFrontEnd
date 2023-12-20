import { Message } from "../message/message.model";

export interface ChannelDTO {
    id: number;
    name: string;
    description: string;
    messages: Message[];
  }
