import { Task } from '../../../domain/entities/Task';
import { IAssignTask } from './interface/IAssignTask';
import { ITaskServices } from '../../services/ITaskServices';
import { IUserServices } from '../../services/IUserServices';
import { User } from '../../../domain/entities/User';
import { returnTaskServicesImplement } from '../../../infra/locator/returnTaskServicesImplement';
import { returnUserServicesImplement } from '../../../infra/locator/returnUserServicesImplement';
import { UserNotFoundError } from '../../../shared/constant/UserNotFoundError';
import { TaskNotFoundError } from '../../../shared/constant/TaskNotFoundError';

export class AssignTask implements IAssignTask {
  constructor(
    private readonly taskServices: ITaskServices = returnTaskServicesImplement(),
    private readonly userServices: IUserServices = returnUserServicesImplement()
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
