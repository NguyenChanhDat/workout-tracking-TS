export const MssqlRestoreDatabaseNamed = (databaseName: string) => {
  return `--sql
      USE [master];
        RESTORE DATABASE [LocalDatabase]
        FROM DISK = N'/home/mssql/${databaseName}'
        WITH FILE = 1, REPLACE, NOUNLOAD, STATS = 5;
  `;
};
