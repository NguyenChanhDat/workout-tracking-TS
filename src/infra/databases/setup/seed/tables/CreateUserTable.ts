export function CreateUserTable() {
  return `
      USE LocalDatabase
      CREATE TABLE Users (
      Id INT NOT NULL IDENTITY(1,1),
      username varchar(255) NOT NULL,
      password varchar(255) NOT NULL,
      PRIMARY KEY (Id)
      );
    `;
}
