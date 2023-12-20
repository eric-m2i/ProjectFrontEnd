import { Message } from "../message/message.model";

export interface User {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    pseudo: string;
    messages: Message[];
  }