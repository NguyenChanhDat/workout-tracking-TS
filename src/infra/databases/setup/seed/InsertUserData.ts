export function InsertUserData() {
  return `--sql
        USE LocalDatabase
        INSERT INTO [Users] ([username], [password], [membershipTier], [role])
        VALUES 
        ('johncena', 'password123', 'Basic', 'User'),
        ('randyorton', 'password456', 'Advance', 'User'),
        ('sheamus', 'password789', 'High', 'User'),
        ('bigshow','$2a$10$VAR3KBkYFbudPbFGRDd4aO4as/ocsPmk06CPADYGHXkoLEae4Lmi6', 'Basic', 'Admin')
    `;
}
