export function InsertUserData() {
  return `--sql
        USE LocalDatabase
        INSERT INTO [Users] ([username], [password], [membershipTier], [role])
        VALUES 
        ('johncena', '$2a$10$tKYmhWk7I.TMnr2NNyV.PunpdA.86AIxvD8Pd2do/wP280eBP18mm', 'Basic', 'User'),
        ('randyorton', 'password456', 'Advance', 'User'),
        ('sheamus', 'password789', 'High', 'User'),
        ('bigshow','$2a$10$VAR3KBkYFbudPbFGRDd4aO4as/ocsPmk06CPADYGHXkoLEae4Lmi6', 'Basic', 'Admin')
    `;
}
