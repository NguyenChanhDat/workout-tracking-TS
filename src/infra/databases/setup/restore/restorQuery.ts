export const MssqlRestoreDatabaseNamed = (databaseName: string) => {
  return `
      USE [master];
        RESTORE DATABASE [LocalDatabase]
        FROM DISK = N'/home/mssql/${databaseName}'
        WITH FILE = 1, REPLACE, NOUNLOAD, STATS = 5;
  `;
};
