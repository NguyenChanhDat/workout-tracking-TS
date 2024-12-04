import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { UserInMemoryRepository } from '../databases/repositories/inMemory/UserInMemoryRepository';

export function returnUserRepositoryImplement(): IUserRepository {
  return new UserInMemoryRepository();
}
