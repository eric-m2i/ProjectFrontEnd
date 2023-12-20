import { Message } from "../message/message.model";

export interface UserDTO {
    id?: number;
    nom: string;
    prenom: string;
    email: string;
    pseudo: string;
    messages: Message[];
  }