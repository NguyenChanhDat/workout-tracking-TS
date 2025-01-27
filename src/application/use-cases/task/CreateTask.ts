import { CreateTaskDto } from '../../dto/task/createTaskDto';
import { ICreateTask } from './interface/ICreateTask';
import { ITaskServices } from '../../services/ITaskServices';
import { returnTaskServicesImplement } from '../../../infra/locator/returnTaskServicesImplement';

export class CreateTask implements ICreateTask {
  constructor(
    private readonly taskServices: ITaskServices = returnTaskServicesImplement()
  ) {}
  public execute = async (taskInput: CreateTaskDto): Promise<CreateTaskDto> => {
    try {
      await this.taskServices.createEntity(taskInput);
      return taskInput;
    } catch (error) {
      throw new Error();
    }
  };
}
