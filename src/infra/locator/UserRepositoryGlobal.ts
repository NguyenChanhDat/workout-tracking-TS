import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { UserInMemoryRepository } from '../databases/repositories/inMemory/UserInMemoryRepository';

export const userRepositoryGlobal: IUserRepository =
  new UserInMemoryRepository();
