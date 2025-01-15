import { ITaskRepository } from '../../../../domain/repositories/ITaskRepository';
import { Task } from '../../../../domain/entities/Task';
import { CreateTaskDto } from '../../../../application/dto/task/createTaskDto';
import { UpdateTaskDto } from '../../../../application/dto/task/updateTaskDto';

export class TaskInMemoryRepository implements ITaskRepository {
  private tasks: Task[] = [];
  private taskIdCounter = 1;

  async createEntity(createTaskDto: CreateTaskDto): Promise<void> {
    const newTask: Task = {
      id: this.taskIdCounter++,
      title: createTaskDto.title,
      description: createTaskDto.description,
      createdTime: new Date().toISOString(),
      modifiedTime: undefined,
      userId: createTaskDto.userId,
      status: createTaskDto.status,
    };
    this.tasks.push(newTask);
    Promise.resolve();
  }

  async updateEntity(taskId: number, updateInfo: UpdateTaskDto): Promise<void> {
    this.tasks[taskId] = {
      createdTime: new Date().toISOString(),
      ...updateInfo,
    };
    Promise.resolve();
  }

  async deleteEntity(taskId: number): Promise<void> {
    this.tasks.splice(taskId, 1);
    return Promise.resolve();
  }

  async getEntityById(taskId: number): Promise<Task | null> {
    return Promise.resolve(
      this.tasks.find((task) => task.id === taskId) || null
    );
  }

  async showListEntity(): Promise<Task[] | null> {
    return Promise.resolve(this.tasks.length > 0 ? this.tasks : null);
  }

  async getByUserId(userId: number): Promise<Task[] | null> {
    const taskLists: Task[] = [];
    this.tasks.forEach((task) => {
      if (task.userId === userId) {
        taskLists.push(task);
      }
    });
    return Promise.resolve(taskLists);
  }
}
