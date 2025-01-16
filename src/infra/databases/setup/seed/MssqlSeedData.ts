import { returnDatabaseConnection } from '../../../../infra/locator/returnDatabaseConnection';
import { IConnectDatabase } from '../connect/IConnectDatabase';
import { InsertDataQueryList } from './data';
import { ISeedData } from './ISeedData';
import { CreateTableQueryList } from './tables';
import sql from 'mssql';
// let failCreate = 0;
// let failInsert = 0;
export class MssqlSeedData implements ISeedData {
  constructor(
    private readonly createTableQueryList: string[] = CreateTableQueryList,
    private readonly insertDataQueryList: string[] = InsertDataQueryList,
    private readonly dbConnect: IConnectDatabase = returnDatabaseConnection()
  ) {}
  createTable = async (): Promise<void> => {
    await this.dbConnect.execute();
    for (let i = 0; i < this.createTableQueryList.length; i++) {
      await sql.query(`${this.createTableQueryList[i]}`);
      console.log();
    }
  };
  insertData = async (): Promise<void> => {
    await this.dbConnect.execute();
    for (let i = 0; i < this.insertDataQueryList.length; i++) {
      await sql.query(`${this.insertDataQueryList[i]}`);
      process.exit();
    }
  };
}
