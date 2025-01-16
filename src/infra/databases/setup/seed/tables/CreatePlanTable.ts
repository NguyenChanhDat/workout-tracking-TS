export function CreatePlanTable() {
    return `
    USE LocalDatabase
        CREATE TABLE [Plans] (
        [id] INTEGER NOT NULL IDENTITY UNIQUE,
        [userId] INTEGER NOT NULL,
        [name] NVARCHAR(MAX) NOT NULL,
        [membershipTier] NVARCHAR(MAX) NOT NULL CHECK ([membershipTier] IN ('Basic', 'Advance', 'High')),
        PRIMARY KEY ([id]),
        FOREIGN KEY ([userId]) REFERENCES [Users]([id])
            ON UPDATE NO ACTION ON DELETE NO ACTION
    );
      `;
  }
  