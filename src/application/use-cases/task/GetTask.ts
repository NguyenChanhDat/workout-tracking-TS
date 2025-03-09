import { IGetTask } from './interface/IGetTask';
import { Task } from '../../../domain/entities/Task';
import { ITaskServices } from '../../services/ITaskServices';
import { taskServicesGlobal } from '../../../infra/locator/taskServicesGlobal';

export class GetTask implements IGetTask {
  constructor(
    private readonly taskServices: ITaskServices = taskServicesGlobal
  ) {}
  public executeById = async (taskId: number): Promise<Task> => {
    const taskById: Task | null = await this.taskServices.getEntityById(taskId);
    if (!taskById) {
      throw new Error();
    }
    return taskById;
  };
  public executeByUserId = async (userId: number): Promise<Task[] | null> => {
    const taskById: Task[] | null = await this.taskServices.getByUserId(userId);
    return taskById;
  };
  public getAll = async (): Promise<Task[] | null> => {
    const taskList: Task[] | null = await this.taskServices.showListEntity();
    return taskList;
  };
}
