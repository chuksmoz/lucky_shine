
import { AsyncContainerModule, Container } from 'inversify';
import { Connection } from 'typeorm';
import { TreasureBoxService } from '../../core/application/services/treasureBoxService';
import { TYPES } from '../../core/domain/constant/type';
import { ITreasureBoxService } from '../../core/domain/interfaces/itresaureBoxService';
import { Conn, getDbConnection } from '../../infrastructure/data/dbConnection';
import '../controllers/index'


const container = new Container();
export default container;

export const bindings = new AsyncContainerModule(async (bind) => {

    const conn = await getDbConnection();
    conn.runMigrations()
    bind<Connection>(TYPES.Conn).toDynamicValue(() => {
        return Conn();
    })
    
    bind<ITreasureBoxService>(TYPES.ITreasureBoxService).to(TreasureBoxService).inRequestScope();
    
   
    

});