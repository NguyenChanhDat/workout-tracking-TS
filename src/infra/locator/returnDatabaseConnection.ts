import { IConnectDatabase } from '../../../tools/db/IConnectDatabase';
import { MssqlConnectDatabase } from '../../../tools/db/MssqlConnectDatabase';

export function returnDatabaseConnection(): IConnectDatabase {
  return new MssqlConnectDatabase();
}
