import { IDeleteTask } from './interface/IDeleteTask';
import { Task } from '../../../domain/entities/Task';
import { ITaskServices } from '../../services/ITaskServices';
import { returnTaskServicesImplement } from '../../../infra/locator/returnTaskServicesImplement';
import { TaskNotFoundError } from '../../../shared/constant/TaskNotFoundError';

export class DeleteTask implements IDeleteTask {
  constructor(
    private readonly taskServices: ITaskServices = returnTaskServicesImplement()
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
