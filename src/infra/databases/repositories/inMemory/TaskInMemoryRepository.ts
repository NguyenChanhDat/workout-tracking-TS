import { ITaskRepository } from '../../../../domain/repositories/ITaskRepository';
import { Task } from '../../../../domain/entities/Task';
import { CreateTaskDto } from '../../../../application/dto/task/createTaskDto';
import { UpdateTaskDto } from '../../../../application/dto/task/updateTaskDto';

export class TaskInMemoryRepository implements ITaskRepository {
    private tasks: Task[] = [];
    private taskIdCounter = 1;

    async createEntity(createTaskDto: CreateTaskDto): Promise<Task> {
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
        return newTask;
    }

    async updateEntity(taskById: Task, updateInfo: UpdateTaskDto): Promise<Task> {
        const taskIndex = this.tasks.findIndex((task) => task.id === taskById.id);
        if (taskIndex === -1) {
            throw new Error(`Task with ID ${taskById.id} not found.`);
        }

        const updatedTask: Task = {
            ...this.tasks[taskIndex],
            ...updateInfo,
            modifiedTime: new Date().toISOString(),
        };

        this.tasks[taskIndex] = updatedTask;
        return updatedTask;
    }

    async deleteEntity(task: Task): Promise<void> {
        const taskIndex = this.tasks.findIndex((t) => t.id === task.id);
        if (taskIndex === -1) {
            throw new Error(`Task with ID ${task.id} not found.`);
        }
        this.tasks.splice(taskIndex, 1);
    }

    async getEntityById(taskId: number): Promise<Task | null> {
        return this.tasks.find((task) => task.id === taskId) || null;
    }

    async showListEntity(): Promise<Task[] | null> {
        return this.tasks.length > 0 ? this.tasks : null;
    }

    async getByUserId(userId: number): Promise<Task | null> {
        return this.tasks.find((task) => task.userId === userId) || null;
    }
}
