export function CreateUserTable() {
  return `--sql
  USE LocalDatabase
      CREATE TABLE [Users] (
      [id] INTEGER NOT NULL IDENTITY UNIQUE,
      [username] NVARCHAR(MAX) NOT NULL,
      [password] NVARCHAR(MAX) NOT NULL,
      [email] NVARCHAR(MAX),
      [dateOfBirth] DATE,
      [phoneNumber] NVARCHAR(MAX),
      [avaUrl] NVARCHAR(MAX),
      [membershipTier] NVARCHAR(MAX) NOT NULL DEFAULT 'Basic' CHECK ([membershipTier] IN ('Basic', 'Advance', 'High')),
      PRIMARY KEY ([id])
    );
    `;
}
