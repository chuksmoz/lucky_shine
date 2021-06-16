import { MoneyValue } from "../../core/domain/entities/moneyValue";
import { Treasure } from "../../core/domain/entities/treasure";
import { User } from "../../core/domain/entities/user";

export const UsersSeed = [
    {
        "id": 3000,
        "name": "U1",
        "age": 21,
        "password": "luckyshine001",
        "email": "u1@luckyshine.xyz"
    },
    {
        "id": 3001,
        "name": "U2",
        "age": 51,
        "password": "luckyshine002",
        "email": "u2@luckyshine.xyz"
    },
    {
        "id": 3002,
        "name": "U3",
        "age": 31,
        "password": "luckyshine003",
        "email": "u1@luckyshine.xyz"
    },
    {
        "id": 3003,
        "name": "U4",
        "age": 18,
        "password": "luckyshine004",
        "email": "u2@luckyshine.xyz"
    },
    {
        "id": 3004,
        "name": "U5",
        "age": 21,
        "password": "luckyshine005",
        "email": "u1@luckyshine.xyz"
    },
    {
        "id": 3005,
        "name": "U6",
        "age": 35,
        "password": "luckyshine006",
        "email": "u2@luckyshine.xyz"
    }
].map(data => {
    const user = new User();
    Object.assign(user, data);
    return user;
});

export const MoneyValuesSeed = [
    {
        "amt": 15,
        "treasureId": 100
    },
    {
        "amt": 10,
        "treasureId": 101
    },
    {
        "amt": 15,
        "treasureId": 102
    },
    {
        "amt": 15,
        "treasureId": 103
    },

    {
        "amt": 10,
        "treasureId": 104
    },
    {
        "amt": 105,
        "treasureId": 105
    },

    {
        "amt": 15,
        "treasureId": 106
    },
    {
        "amt": 10,
        "treasureId": 107
    },

    {
        "amt": 15,
        "treasureId": 108
    },
    {
        "amt": 15,
        "treasureId": 109
    },

    {
        "amt": 10,
        "treasureId": 110
    },
    {
        "amt": 15,
        "treasureId": 111
    },

    {
        "amt": 15,
        "treasureId": 112
    },
    {
        "amt": 10,
        "treasureId": 113
    },

    {
        "amt": 15,
        "treasureId": 114
    },
    {
        "amt": 15,
        "treasureId": 115
    },

    {
        "amt": 10,
        "treasureId": 116
    },
    {
        "amt": 15,
        "treasureId": 117
    },

    {
        "amt": 20,
        "treasureId": 100
    },
    {
        "amt": 25,
        "treasureId": 101
    },

    {
        "amt": 20,
        "treasureId": 102
    },
    {
        "amt": 25,
        "treasureId": 103
    },

    {
        "amt": 30,
        "treasureId": 107
    },
    {
        "amt": 30,
        "treasureId": 108
    },
    {
        "amt": 30,
        "treasureId": 109
    }

].map(data => {
    const moneyValue = new MoneyValue();
    Object.assign(moneyValue, data);
    return moneyValue;
});

export const TreasuresSeed = [
   {
        "id": 100,
        "name": "T1",
        "latitude": 1.33125924,
        "longitude": 103.8980486
    },
    {
        "id": 101,
        "name": "T2",
        "latitude": 1.32255754,
        "longitude": 103.8943086
    },
    {
        "id": 102,
        "name": "T3",
        "latitude": 1.3166356,
        "longitude": 103.8891225
    },
    {
        "id": 103,
        "name": "T4",
        "latitude": 1.31286055,
        "longitude": 103.8545565
    },
    {
        "id": 104,
        "name": "T5",
        "latitude": 1.34439896,
        "longitude": 103.8765938
    },
    {
        "id": 105,
        "name": "T6",
        "latitude": 1.33616189,
        "longitude": 103.8770866
    },
    {
        "id": 106,
        "name": "T7",
        "latitude": 1.32552844,
        "longitude": 103.8691014
    },
    {
        "id": 107,
        "name": "T8",
        "latitude": 1.32303589,
        "longitude": 103.8774815
    },
    {
        "id": 108,
        "name": "T9",
        "latitude": 1.33465304,
        "longitude": 103.870449
    },
    {
        "id": 109,
        "name": "T10",
        "latitude": 1.32606138,
        "longitude": 103.8793007
    },
    {
        "id": 110,
        "name": "T11",
        "latitude": 1.25886946,
        "longitude": 103.898879   
    },
    {
        "id": 111,
        "name": "T12",
        "latitude": 1.26973345,
        "longitude": 103.8810448
    },
    {
        "id": 112,
        "name": "T13",
        "latitude": 1.32914713,
        "longitude": 103.8334781
    },
     {
        "id": 113,
        "name": "T14",
        "latitude": 1.32960595,
        "longitude": 103.8807937
    },
    {
        "id": 114,
        "name": "T15",
        "latitude": 1.33700251,
        "longitude": 103.8492249
    },
    {
        "id": 115,
        "name": "T16",
        "latitude": 1.27845714,
        "longitude": 103.8571762
    },
    {
        "id": 116,
        "name": "T17",
        "latitude": 1.36019784,
        "longitude": 103.8563582
    },
    {
        "id": 117,
        "name": "T18",
        "latitude": 1.31551921,
        "longitude": 103.8632839
    },

].map(data => {
    const treasure = new Treasure();
    Object.assign(treasure, data);
    return treasure;
});