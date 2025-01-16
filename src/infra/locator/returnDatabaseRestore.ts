import { IRestoreDatabase } from '../../infra/databases/setup/restore/IRestoreLocalDatabase';
import { MssqlRestore } from '../../infra/databases/setup/restore/MssqlRestore';

export const returnDatabaseRestore = (): IRestoreDatabase => {
  return new MssqlRestore();
};
