import { ITaskRepository } from '../../domain/repositories/ITaskRepository';
import { TaskInMemoryRepository } from '../databases/repositories/inMemory/TaskInMemoryRepository';

export function returnTaskRepositoryImplement(): ITaskRepository {
  return new TaskInMemoryRepository();
}
