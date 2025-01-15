import { IBootstrap } from '@presentation/bootstrap/IBootstrap';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export class BootstrapTypeOrm implements IBootstrap {
  private appDataSource: DataSource = new DataSource({
    type: 'mssql',
    host: 'localhost',
    port: 1401,
    username: 'sa',
    password: 'Dat20112011',
    database: 'ABC',
    options: {
      trustServerCertificate: true,
    },
  });
  public dataSourceIsInitialized = async (): Promise<boolean> => {
    return this.appDataSource.isInitialized;
  };
  public initialize = async (): Promise<void> => {
    await this.appDataSource.initialize();
  };
}
