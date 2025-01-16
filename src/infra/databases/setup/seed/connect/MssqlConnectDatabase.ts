import { IConnectDatabase } from './IConnectDatabase';
import sql from 'mssql';

export class MssqlConnectDatabase implements IConnectDatabase {
  private sqlConfig = {
    user: process.env.DB_USER || 'sa',
    password: process.env.DB_PASSWORD || 'Dat20112011',
    server: process.env.DB_SERVER || 'localhost',
    port: Number(process.env.DB_PORT) || 1401,
    options: {
      trustServerCertificate: true,
    },
  };
  public execute = async (): Promise<void> => {
    try {
      await sql.connect(this.sqlConfig);
      console.log('Connect Database Successfully');
    } catch (error) {
      await this.execute();
    }
  };
}
