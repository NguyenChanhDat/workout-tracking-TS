import {
  connectionType,
  DatabaseFactory,
} from '../../infra/factory/DatabaseFactory';

export const returnConnectionPool = async (
  databaseType: string
): Promise<connectionType> => {
  const dbFactory = new DatabaseFactory();
  const dbInstance = dbFactory.returnDatabaseInstance(databaseType);
  return await dbInstance.returnPool();
};
