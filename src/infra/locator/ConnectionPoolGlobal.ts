import {
  connectionType,
  DatabaseFactory,
} from '../factory/DatabaseFactory';

export const connectionPoolGlobal = async (
  databaseType: string
): Promise<connectionType> => {
  const dbFactory = new DatabaseFactory();
  const dbInstance = dbFactory.returnDatabaseInstance(databaseType);
  return await dbInstance.returnPool();
};
