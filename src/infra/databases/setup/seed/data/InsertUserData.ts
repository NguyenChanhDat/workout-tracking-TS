export function InsertUserData(){
    return `
        USE LocalDatabase
        INSERT INTO [Users] ([username], [password], [membershipTier])
        VALUES 
        ('johncena', 'password123', 'Basic'),
        ('randyorton', 'password456', 'Advance'),
        ('sheamus', 'password789', 'High');
    `
}