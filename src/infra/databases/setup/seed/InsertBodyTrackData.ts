export function InsertBodyTrackData(){
    return `--sql
        USE LocalDatabase
        INSERT INTO [BodyTracks] ([weight], [height], [date], [userId])
        VALUES 
        (70, 170, '2025-01-01', 1),
        (65, 165, '2025-01-02', 2),
        (85, 180, '2025-01-03', 3);
    `
}