import { IConnectDatabase } from '../databases/setup/seed/connect/IConnectDatabase';
import { MssqlConnectDatabase } from '../databases/setup/seed/connect/MssqlConnectDatabase';

export const returnDatabaseConnection = (): IConnectDatabase => {
  return new MssqlConnectDatabase();
};
