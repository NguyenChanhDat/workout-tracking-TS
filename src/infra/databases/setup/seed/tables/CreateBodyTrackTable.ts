export function CreateBodyTrackTable() {
  return `--sql
        USE LocalDatabase
        CREATE TABLE [BodyTracks] (
        [id] INTEGER NOT NULL IDENTITY UNIQUE,
        [weight] FLOAT(5,2) NOT NULL,
        [height] FLOAT(5,2) NOT NULL,
        [date] DATE NOT NULL,
        [userId] INTEGER NOT NULL,
        PRIMARY KEY ([id]),
        FOREIGN KEY ([userId]) REFERENCES [Users]([id])
            ON UPDATE NO ACTION ON DELETE NO ACTION
    );
      `;
}
