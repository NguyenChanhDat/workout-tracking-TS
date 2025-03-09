import { mssqlConfigGlobal } from '../../../infra/locator/DbConfigGlobal';
import { MssqlConfigType } from '../config/configType';
import { IDatabase } from './IDatabase';
import sql from 'mssql';

export class Mssql implements IDatabase<sql.ConnectionPool> {
  constructor(
    private readonly sqlConfig: MssqlConfigType = mssqlConfigGlobal
  ) {}

  public returnPool = async (): Promise<sql.ConnectionPool> => {
    try {
      console.log('Attempt to connect to mssql');
      const pool = new sql.ConnectionPool(this.sqlConfig);
      await pool.connect();
      console.log('Successfully connected');
      return pool;
    } catch (error) {
      return await this.returnPool();
    }
  };

  public runQuery = async (
    connection: sql.ConnectionPool,
    commandList: string[]
  ): Promise<void> => {
    for (let i = 0; i < commandList.length; i++) {
      await connection.request().query(`${commandList[i]}`);
      console.log(`${commandList[i]}`);
    }
    Promise.resolve();
  };

  public release = async (connection: sql.ConnectionPool): Promise<void> => {
    await connection.close();
    console.log('Connection Released');
    Promise.resolve();
  };
}
