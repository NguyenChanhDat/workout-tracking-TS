export function CreateActivityTable() {
    return `--sql
        USE LocalDatabase
        CREATE TABLE [Activitys] (
        [id] INTEGER NOT NULL IDENTITY UNIQUE,
        [content] NVARCHAR(MAX) NOT NULL,
    );
      `;
  }
  