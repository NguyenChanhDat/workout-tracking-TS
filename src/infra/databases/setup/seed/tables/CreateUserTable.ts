export function CreateUserTable() {
  return `
  USE LocalDatabase
      CREATE TABLE [Users] (
      [id] INTEGER NOT NULL IDENTITY UNIQUE,
      [username] NVARCHAR(MAX) NOT NULL,
      [password] NVARCHAR(MAX) NOT NULL,
      [membershipTier] NVARCHAR(MAX) NOT NULL DEFAULT 'Basic' CHECK ([membershipTier] IN ('Basic', 'Advance', 'High')),
      PRIMARY KEY ([id])
    );
    `;
}
