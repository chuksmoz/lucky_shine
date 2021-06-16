import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Treasure } from "./treasure";



@Entity()
export class MoneyValue{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    treasureId: number;

    @Column()
    amt: number
    @ManyToOne(() => Treasure, treasure => treasure.moneyValues)
    treasure: Treasure;
}

