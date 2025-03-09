import { IDeleteTask } from './interface/IDeleteTask';
import { Task } from '../../../domain/entities/Task';
import { ITaskServices } from '../../services/ITaskServices';
import { taskServicesGlobal } from '../../../infra/locator/taskServicesGlobal';
import { TaskNotFoundError } from '../../../shared/constant/TaskNotFoundError';

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
