import { ITaskRepository } from '../../domain/repositories/ITaskRepository';
import { TaskInMemoryRepository } from '../databases/repositories/inMemory/TaskInMemoryRepository';

export const taskRepositoryGlobal: ITaskRepository =
  new TaskInMemoryRepository();
