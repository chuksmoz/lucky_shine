import {getConnection, MigrationInterface, QueryRunner} from "typeorm";
import { MoneyValuesSeed, TreasuresSeed, UsersSeed } from "../data/seedData";

export class SeedDataBase1623666493390 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await getConnection().manager.save(UsersSeed);
        await getConnection().manager.save(TreasuresSeed);
        await getConnection().manager.save(MoneyValuesSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
