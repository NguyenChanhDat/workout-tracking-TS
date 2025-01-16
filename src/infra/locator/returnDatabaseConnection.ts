import { IConnectDatabase } from '../../infra/databases/setup/connect/IConnectDatabase';
import { MssqlConnectDatabase } from '../../infra/databases/setup/connect/MssqlConnectDatabase';

export const returnDatabaseConnection = (): IConnectDatabase => {
  return new MssqlConnectDatabase();
};
