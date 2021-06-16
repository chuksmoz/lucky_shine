import { MessageResponse } from "./model/messageResponse";

export class Util{
    
    public static getResponse<T>(response: boolean, message:string, data: T): MessageResponse<T> {
        let messageResponse = new MessageResponse<T>();
        messageResponse.isSuccessResponse = response;
        messageResponse.message = message;
        messageResponse.data = data;
        return messageResponse;

    }


}