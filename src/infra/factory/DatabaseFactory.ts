import { IDatabase } from '../databases/dataSource/IDatabase';
import { Mssql } from '../databases/dataSource/Mssql';
import sql from 'mssql';

export class DatabaseFactory {
  public returnDatabaseInstance = (
    databases: string
  ): IDatabase<connectionType> => {
    switch (databases) {
      case 'mssql':
        return new Mssql();
    }
    throw new Error('Unknown database type!');
  };
}

export type connectionType =
  sql.ConnectionPool /*use | AnotherType  for another datatype*/;
