import { Column, ColumnType, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MoneyValue } from "./moneyValue";

@Entity()
export class Treasure {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column({
        type: 'numeric', precision: 10, scale: 8  
    })
    latitude: number;
    @Column({
        type: 'numeric', precision: 11, scale: 8
    })
    longitude: number;
    @OneToMany(() => MoneyValue, moneyValue => moneyValue.treasure, {
        eager : true
    })
    @JoinTable()
    moneyValues: MoneyValue[];
}