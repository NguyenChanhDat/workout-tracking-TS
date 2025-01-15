import { IConnectDatabase } from './IConnectDatabase';
import sql from 'mssql';

export class MssqlConnectDatabase implements IConnectDatabase {
  private sqlConfig = {
    user: 'sa',
    password: 'Dat20112011',
    server: 'localhost',
    port: 1401,
    options: {
      trustServerCertificate: true,
    },
  };
  public execute = async (): Promise<void> => {
    try {
      await sql.connect(this.sqlConfig);
      console.log('Connect Database Successfully');
    } catch (error) {
      console.log(error);
    }
  };
}
