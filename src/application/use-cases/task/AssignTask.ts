import { Task } from '../../../domain/entities/Task';
import { IAssignTask } from './interface/IAssignTask';
import { ITaskServices } from '../../services/ITaskServices';
import { IUserServices } from '../../services/IUserServices';
import { User } from '../../../domain/entities/User';
import { taskServicesGlobal } from '../../../infra/locator/taskServicesGlobal';
import { userServicesGlobal } from '../../../infra/locator/userServicesGlobal';
import { UserNotFoundError } from '../../../shared/constant/UserNotFoundError';
import { TaskNotFoundError } from '../../../shared/constant/TaskNotFoundError';

export class AssignTask implements IAssignTask {
  constructor(
    private readonly taskServices: ITaskServices = taskServicesGlobal,
    private readonly userServices: IUserServices = userServicesGlobal
  ) {}
  public execute = async (taskId: number, userId: number): Promise<void> => {
    const userById: User | null = await this.userServices.getUserById(userId);
    if (!userById) {
      throw new UserNotFoundError();
    }
    const taskById: Task | null = await this.taskServices.getEntityById(taskId);
    if (!taskById) {
      throw new TaskNotFoundError();
    }
    await this.taskServices.updateEntity(taskId, {
      id: taskById.id,
      userId: userById.id,
      title: taskById.title,
    });
    Promise.resolve();
  };
}
