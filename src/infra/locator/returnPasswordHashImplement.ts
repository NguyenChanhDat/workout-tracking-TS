import { Bcrypt } from '../../infra/security/Bcrypt';
import { IPasswordHash } from '../../application/interfaces/IPasswordHash';

export function returnPasswordHashedImplementation(): IPasswordHash {
  return new Bcrypt();
}
