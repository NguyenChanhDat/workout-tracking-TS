import { CreateTaskDto } from '../dto/task/createTaskDto'
import { UpdateTaskDto } from '../dto/task/updateTaskDto'
import { Task } from '../../domain/entities/Task'

export interface ITaskServices {
    createEntity(task: CreateTaskDto): Promise<Task>
    updateEntity(task: Task, updateInfor: UpdateTaskDto): Promise<Task>
    deleteEntity(taskById: Task): Promise<void>
    getEntityById(taskId: number): Promise<Task | null>
    showListEntity(): Promise<Task[] | null>
    getByUserId(userId: number): Promise<Task | null>
}
