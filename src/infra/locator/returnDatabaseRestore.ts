import { IRestoreDatabase } from '../../../tools/db/restore/IRestoreLocalDatabase';
import { MssqlRestore } from '../../../tools/db/restore/MssqlRestore';

export const returnDatabaseRestore = (): IRestoreDatabase => {
  return new MssqlRestore();
};
