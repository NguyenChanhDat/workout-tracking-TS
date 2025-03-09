import { Bcrypt } from '../../infra/security/Bcrypt';
import { IPasswordHash } from '../../application/interfaces/IPasswordHash';

export const passwordHashGlobal: IPasswordHash = new Bcrypt();
