import { returnDatabaseConnection } from '../../../../infra/locator/returnDatabaseConnection';
import { IConnectDatabase } from './connect/IConnectDatabase';
import { InsertDataQueryList } from './data';
import { ISeedData } from './ISeedData';
import { CreateTableQueryList } from './tables';
import sql from 'mssql';

export class MssqlSeedData implements ISeedData {
  constructor(
    private readonly createTableQueryList: string[] = CreateTableQueryList,
    private readonly insertDataQueryList = InsertDataQueryList,
    private readonly dbConnect: IConnectDatabase = returnDatabaseConnection()
  ) {}
  createTable = async (): Promise<void> => {
    await this.dbConnect.execute();
    for (let i = 0; i < this.createTableQueryList.length; i++) {
      await sql.query(`${this.createTableQueryList[i]}`);
    }
    console.log(`Finished Created Data's Tables`);
  };
  insertData = async (): Promise<void> => {
    await this.dbConnect.execute();
    for (let i = 0; i < this.insertDataQueryList.length; i++) {
      await sql.query(`${this.insertDataQueryList[i]}`);
    }
    console.log(`Finished Insert Data`);
    process.exit();
  };
}
