import { IDeleteTask } from './interface/IDeleteTask';
import { ITaskServices } from '../../services/ITaskServices';
import { taskServicesGlobal } from '../../../infra/locator/TaskServicesGlobal';
import { TaskNotFoundError } from '../../../shared/constant/TaskNotFoundError';
import { Task } from '../../../domain/entities/Task';

export class DeleteTask implements IDeleteTask {
  constructor(
    private readonly taskServices: ITaskServices = taskServicesGlobal
  ) {}
  public executeById = async (taskId: number): Promise<void> => {
    const taskById: Task | null = await this.taskServices.getEntityById(taskId);
    if (!taskById) {
      throw new TaskNotFoundError();
    }
    await this.taskServices.deleteEntity(taskId);
    return Promise.resolve();
  };
}
