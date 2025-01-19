import { connectionType, DatabaseFactory } from '../../factory/DatabaseFactory';
import { IDatabase } from '../dataSource/IDatabase';
import { MssqlRestoreDatabaseNamed } from './restore/restorQuery';
import { CreateTableQueryList } from './seed/tables';
import { InsertDataQueryList } from './seed/data';

let dbInstance: IDatabase<connectionType>;

const returnConnectionPool = async (
  databaseType: string
): Promise<connectionType> => {
  const dbFactory = new DatabaseFactory();
  dbInstance = dbFactory.returnDatabaseInstance(databaseType);
  return await dbInstance.returnPool();
};

const restore = async (
  pool: connectionType,
  databaseName: string
): Promise<void> => {
  await dbInstance.runQuery(pool, [MssqlRestoreDatabaseNamed(databaseName)]);
};

const seed = async (
  pool: connectionType,
  seedCommand: string[]
): Promise<void> => {
  await dbInstance.runQuery(pool, seedCommand);
};

const releaseConnection = async (pool: connectionType): Promise<void> => {
  await dbInstance.release(pool);
};

(async function execute() {
  const connectionPool = await returnConnectionPool('mssql');
  await restore(connectionPool, 'LocalDatabase.bak');
  await seed(connectionPool, CreateTableQueryList);
  await seed(connectionPool, InsertDataQueryList);
  await releaseConnection(connectionPool);
  console.log('Database Setup Completed!');
})();
