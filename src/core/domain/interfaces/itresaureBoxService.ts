import { MessageResponse } from "../../../common/model/messageResponse";
import { Treasure } from "../entities/treasure";

export interface ITreasureBoxService{
    getTresureBox(longitude: number, latitude: number, distance: number, priceValue?:number|undefined): Promise<MessageResponse<Treasure[] | null>>;
}