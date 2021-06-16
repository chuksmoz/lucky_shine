
import { BaseHttpController, controller, httpGet, httpPost, interfaces, request, requestBody } from "inversify-express-utils";
import dotenv from 'dotenv';
import { getConnection, getManager, getRepository } from "typeorm";
import { User } from "../../core/domain/entities/user";
import { Treasure } from "../../core/domain/entities/treasure";
import { TreasuresSeed } from "../../infrastructure/data/seedData";
import { inject } from "inversify";
import { TYPES } from "../../core/domain/constant/type";
import { ITreasureBoxService } from "../../core/domain/interfaces/itresaureBoxService";
import { GetTreasureModelValidator } from "../middleware/validators";
import { IGetTreasureRequest } from "../../core/application/dtos/igetTreasureRequest";
import { validationResult } from "express-validator";
import { Request } from "express";
dotenv.config();

@controller('/treasures')
export class IndexController extends BaseHttpController implements interfaces.Controller{
    
    private readonly _treasureBoxService: ITreasureBoxService;

    constructor(@inject(TYPES.ITreasureBoxService) treasureBoxService: ITreasureBoxService){
        super();
        this._treasureBoxService = treasureBoxService;
    }

    @httpPost('/', ... GetTreasureModelValidator)
    public async get(@requestBody() getTreasureRequest: IGetTreasureRequest, @request() req: Request){

        const error = validationResult(req);
        //console.log(error.array());
        if(!error.isEmpty()) return this.json(error.array(), 400);
        const response = await this._treasureBoxService.getTresureBox(getTreasureRequest.longitude, getTreasureRequest.latitude, getTreasureRequest.distance);
        if (response.isSuccessResponse) {
            return this.ok(response);
        }else{
            return this.json(response, 400);
        }
        
    }

}

