import { injectable } from "inversify";
import { getRepository } from "typeorm";
import { MessageResponse } from "../../../common/model/messageResponse";
import { Util } from "../../../common/util";
import { Treasure } from "../../domain/entities/treasure";
import { ITreasureBoxService } from "../../domain/interfaces/itresaureBoxService";

@injectable()
export class TreasureBoxService implements ITreasureBoxService{

    public async getTresureBox(longitude: number, latitude: number, distance: number, priceValue?:number|undefined): Promise<MessageResponse<Treasure[] | null>> {
        
        const vals = await getRepository(Treasure).find({where: `acos(sin(${latitude}) * sin(latitude) + cos(${latitude}) * cos(${latitude}) * cos(longitude - (${longitude}))) * 6371 <= ${distance}`});

        console.log('checking stuff',vals);
        if (!vals) {
            return Util.getResponse(false, "system error", null);
        }
        if (priceValue) {

            let filteredTreasures = vals.filter((treasure) => treasure.moneyValues.some((moneyValue) => moneyValue.amt >= priceValue && moneyValue.amt <= priceValue));

            return Util.getResponse(true, 'Succesful', filteredTreasures);
        }
        return Util.getResponse(true, 'Successful', vals);
    }

}