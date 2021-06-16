export abstract class BaseMessageResponse{
    public isSuccessResponse: boolean;
    public responseCode: number;
    public message: string;
}

export class MessageResponse<T> extends BaseMessageResponse{
    public data: T;
}

export class Response<T> {
    public data: T;
}