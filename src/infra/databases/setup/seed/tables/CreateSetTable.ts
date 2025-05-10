export function CreateSetTable() {
  return `--sql
    USE LocalDatabase
        CREATE TABLE [Sets] (
        [id] INTEGER NOT NULL IDENTITY UNIQUE,
        [sessionId] INTEGER NOT NULL,
        [exerciseId] INTEGER NOT NULL,
        [weight] INTEGER NOT NULL,
        [reps] INTEGER NOT NULL,
        [restTime] INTEGER NOT NULL,
        PRIMARY KEY ([id]),
        FOREIGN KEY([sessionId]) REFERENCES [Sessions]([id])
        ON UPDATE NO ACTION ON DELETE NO ACTION,
        FOREIGN KEY ([exerciseId]) REFERENCES [Exercises]([id])
            ON UPDATE NO ACTION ON DELETE NO ACTION
    );
      `;
}
