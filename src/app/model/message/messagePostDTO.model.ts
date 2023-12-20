export interface MessagePostDTO {
  content: string;
  timestamp: string;
  channel: {id:number};
  user: {id:number};
}
