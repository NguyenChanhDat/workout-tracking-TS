export function InsertUserData() {
  return `--sql
        USE LocalDatabase
        INSERT INTO [Users] ([username], [password], [membershipTier])
        VALUES 
        ('johncena', 'password123', 'Basic'),
        ('randyorton', 'password456', 'Advance'),
        ('sheamus', 'password789', 'High'),
        ('bigshow','$2a$10$VAR3KBkYFbudPbFGRDd4aO4as/ocsPmk06CPADYGHXkoLEae4Lmi6', 'Basic')
    `;
}
