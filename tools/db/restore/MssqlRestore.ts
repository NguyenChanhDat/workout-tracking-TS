import { returnDatabaseConnection } from '../../../src/infra/locator/returnDatabaseConnection';
import { IConnectDatabase } from '../IConnectDatabase';
import { IRestoreDatabase } from './IRestoreLocalDatabase';
import sql from 'mssql';

export class MssqlRestore implements IRestoreDatabase {
  constructor(
    private readonly databaseConnect: IConnectDatabase = returnDatabaseConnection()
  ) {}
  public executeWithFileName = async (fileName: string): Promise<void> => {
    await this.databaseConnect.execute();
    try {
      await sql.query(
        `USE [master];
      RESTORE DATABASE [LocalDatabase]
      FROM DISK = N'/home/mssql/${fileName}'
      WITH FILE = 1, REPLACE, NOUNLOAD, STATS = 5;
      `
      );
      console.log('Restore Database successfully');
    } catch (error) {
      console.log(error);
    }
  };
}
