import { CreateTaskDto } from '../dto/task/createTaskDto';
import { ITaskServices } from './ITaskServices';
import { Task } from '../../domain/entities/Task';
import { UpdateTaskDto } from '../dto/task/updateTaskDto';
import { ITaskRepository } from '../../domain/repositories/ITaskRepository';
import { returnTaskRepositoryImplement } from '../../infra/locator/returnTaskRepositoryImplement';

export class TaskServices implements ITaskServices {
  constructor(
    private readonly taskRepository: ITaskRepository = returnTaskRepositoryImplement()
  ) {}
  public createEntity = async (taskInput: CreateTaskDto): Promise<Task> => {
    const taskCreated: Task = await this.taskRepository.createEntity(taskInput);
    return taskCreated;
  };
  public updateEntity = async (
    task: Task,
    updateInfor: UpdateTaskDto
  ): Promise<Task> => {
    return await this.taskRepository.updateEntity(task, updateInfor);
  };
  public deleteEntity = async (taskById: Task): Promise<void> => {
    await this.taskRepository.deleteEntity(taskById);
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
  public getByUserId = async (userId: number): Promise<Task | null> => {
    const taskById: Task | null = await this.taskRepository.getByUserId(userId);
    return taskById;
  };
}
