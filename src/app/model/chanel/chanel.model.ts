import { Message } from "../message/message.model";

export interface Channel {
    id: number;
    name: string;
    description: string;
    messages: Message[];
  }