import { CreateTaskDto } from '../../../dto/task/createTaskDto';

export interface ICreateTask {
  execute(taskInput: CreateTaskDto): Promise<CreateTaskDto>;
}
