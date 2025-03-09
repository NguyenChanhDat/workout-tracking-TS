import { IUpdateTask } from './interface/IUpdateTask';
import { UpdateTaskDto } from '../../dto/task/updateTaskDto';
import { Task } from '../../../domain/entities/Task';
import { ITaskServices } from '../../services/ITaskServices';
import { taskServicesGlobal } from '../../../infra/locator/taskServicesGlobal';

export class UpdateTask implements IUpdateTask {
  constructor(
    private readonly taskServices: ITaskServices = taskServicesGlobal
  ) {}
  public execute = async (
    inforInput: UpdateTaskDto
  ): Promise<UpdateTaskDto> => {
    const taskById: Task | null = await this.taskServices.getEntityById(
      inforInput.id
    );
    if (!taskById) {
      throw new Error();
    }
    await this.taskServices.updateEntity(inforInput.id, inforInput);
    return inforInput;
  };
}
