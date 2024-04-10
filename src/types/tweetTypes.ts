import { imagePath } from "./imageTypes";
export interface TweetData {
    id: string;
    username: string;
    image_url: imagePath;
    content: string;
    date: string;
    userEmail:string,
    userId:string
  }