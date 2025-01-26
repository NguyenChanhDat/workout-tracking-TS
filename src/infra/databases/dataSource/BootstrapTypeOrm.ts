import { IBootstrap } from '../../../presentation/bootstrap/IBootstrap';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { typeormConfig } from '../config/config';

export const appDataSource: DataSource = typeormConfig;

export class BootstrapTypeOrm implements IBootstrap {
  public initialize = async (): Promise<void> => {
    await appDataSource.initialize();
  };
}
