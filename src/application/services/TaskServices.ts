import { CreateTaskDto } from '../dto/task/createTaskDto';
import { ITaskServices } from './ITaskServices';
import { Task } from '../../domain/entities/Task';
import { UpdateTaskDto } from '../dto/task/updateTaskDto';
import { taskRepositoryGlobal } from '../../infra/locator/taskRepositoryGlobal';

export class TaskServices implements ITaskServices {
  constructor(private readonly taskRepository = taskRepositoryGlobal) {}
  public createEntity = async (taskInput: CreateTaskDto): Promise<void> => {
    await this.taskRepository.createEntity(taskInput);
    return Promise.resolve();
  };
  public updateEntity = async (
    taskId: number,
    updateInfor: UpdateTaskDto
  ): Promise<void> => {
    this.taskRepository.updateEntity(taskId, updateInfor);
    return Promise.resolve();
  };
  public deleteEntity = async (taskId: number): Promise<void> => {
    await this.taskRepository.deleteEntity(taskId);
    return Promise.resolve();
  };
  public getEntityById = async (taskId: number): Promise<Task | null> => {
    const taskById: Task | null = await this.taskRepository.getEntityById(
      taskId
    );
    return taskById;
  };
  public showListEntity = async (): Promise<Task[] | null> => {
    const taskList: Task[] | null = await this.taskRepository.showListEntity();
    return taskList;
  };
  public getByUserId = async (userId: number): Promise<Task[] | null> => {
    const taskById: Task[] | null = await this.taskRepository.getByUserId(
      userId
    );
    return taskById;
  };
}
