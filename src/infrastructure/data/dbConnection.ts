import { Connection, createConnection, getConnection } from "typeorm";
import * as dotenv from "dotenv";
dotenv.config();


export async function getDbConnection(): Promise<Connection> {

    try {
        const conn = await createConnection();
        return conn;
    } catch (error) {
        throw new Error(error);
    }
}

export function Conn(){
    return getConnection();
}