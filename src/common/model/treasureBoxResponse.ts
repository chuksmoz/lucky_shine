

export interface IMoneyValue {
    id: number;
    treasureId: number;
    amt: number;
}

export interface TreasureBoxResponse {
    id: number;
    name: string;
    latitude: string;
    longitude: string;
    moneyValues: IMoneyValue[];
}