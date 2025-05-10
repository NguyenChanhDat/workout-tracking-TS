export function CreateSessionTable() {
  return `--sql
    USE LocalDatabase
        CREATE TABLE [Sessions] (
            [id] INTEGER NOT NULL IDENTITY UNIQUE,
            [date] DATE,
            [planId] INTEGER,
            PRIMARY KEY([id], [planId]),
            FOREIGN KEY([planId]) REFERENCES [Plans]([id])
            ON UPDATE NO ACTION ON DELETE NO ACTION
        );
      `;
}
