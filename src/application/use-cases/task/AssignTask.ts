import { Task } from '../../../domain/entities/Task';
import { IAssignTask } from './interface/IAssignTask';
import { ITaskServices } from '../../services/ITaskServices';
import { IUserServices } from '../../services/IUserServices';
import { User } from '../../../domain/entities/User';
import { returnTaskServicesImplement } from '../../../infra/locator/returnTaskServicesImplement';
import { returnUserServicesImplement } from '../../../infra/locator/returnUserServicesImplement';

export class AssignTask implements IAssignTask {
  constructor(
    private readonly taskServices: ITaskServices = returnTaskServicesImplement(),
    private readonly userServices: IUserServices = returnUserServicesImplement()
  ) {}
  public execute = async (taskId: number, userId: number): Promise<Task> => {
    const userById: User | null = await this.userServices.getUserById(userId);
    if (!userById) {
      throw new Error();
    }
    const taskById: Task | null = await this.taskServices.getEntityById(taskId);
    if (!taskById) {
      throw new Error();
    }
    const taskUpdated: Task = await this.taskServices.updateEntity(taskById, {
      id: taskById.id,
      userId: userById.id,
      title: taskById.title,
    });
    return taskUpdated;
  };
}
