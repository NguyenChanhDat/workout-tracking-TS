import { CreateTaskDto } from '../dto/task/createTaskDto'
import { UpdateTaskDto } from '../dto/task/updateTaskDto'
import { Task } from '../../domain/entities/Task'

export interface ITaskServices {
    createEntity(task: CreateTaskDto): Promise<void>
    updateEntity(taskId: number, updateInfor: UpdateTaskDto): Promise<void>
    deleteEntity(taskId: number): Promise<void>
    getEntityById(taskId: number): Promise<Task | null>
    showListEntity(): Promise<Task[] | null>
    getByUserId(userId: number): Promise<Task[] | null>
}
