import { returnDatabaseRestore } from '../../../src/infra/locator/returnDatabaseRestore';
import { IRestoreDatabase } from './IRestoreLocalDatabase';

(async function executeRestoreDatabase() {
  const restoreDatabaseInstance: IRestoreDatabase = returnDatabaseRestore();
  await restoreDatabaseInstance.executeWithFileName('LocalDatabase.bak');
})();
