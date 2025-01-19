import { returnMssqlConfig } from '@infra/locator/returnDbConfig';
import { MssqlConfigType } from '../config/configType';
import { IDatabase } from './IDatabase';
import sql from 'mssql';

export class Mssql implements IDatabase<sql.ConnectionPool> {
  constructor(
    private readonly sqlConfig: MssqlConfigType = returnMssqlConfig()
  ) {}

  public returnPool = async (): Promise<sql.ConnectionPool> => {
    const pool = new sql.ConnectionPool(this.sqlConfig);
    await pool.connect();
    console.log('Connect Database Successfully');
    return pool;
  };

  public runQuery = async (
    connection: sql.ConnectionPool,
    commandList: string[]
  ): Promise<void> => {
    for (let i = 0; i < commandList.length; i++) {
      await connection.request().query(`${commandList[i]}`);
    }
    Promise.resolve();
  };

  public release = async (connection: sql.ConnectionPool): Promise<void> => {
    await connection.close();
    Promise.resolve();
  };
}
