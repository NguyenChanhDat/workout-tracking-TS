export function CreateBodyTrackTable() {
    return `
        USE LocalDatabase
        CREATE TABLE [BodyTracks] (
        [id] INTEGER NOT NULL IDENTITY UNIQUE,
        [weight] INTEGER NOT NULL,
        [height] INTEGER NOT NULL,
        [date] DATE NOT NULL,
        [userId] INTEGER NOT NULL,
        PRIMARY KEY ([id]),
        FOREIGN KEY ([userId]) REFERENCES [Users]([id])
            ON UPDATE NO ACTION ON DELETE NO ACTION
    );
      `;
  }
  