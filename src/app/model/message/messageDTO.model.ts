import { ChannelDTO } from "../chanel/chanelDTO.model";
import { UserDTO } from "../user/userDTO.model";

export interface MessageDTO {
    id?: number;
    content: string;
    timestamp: string; 
    channel: ChannelDTO;
    user: UserDTO;
  }