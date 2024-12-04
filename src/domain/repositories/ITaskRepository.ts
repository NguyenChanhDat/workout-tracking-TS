import { UpdateTaskDto } from '../../application/dto/task/updateTaskDto'
import { Task } from '../entities/Task'
import { EntityRepository } from './EntityRepository'
import { CreateTaskDto } from '../../application/dto/task/createTaskDto'

export interface ITaskRepository extends EntityRepository<Task> {
    createEntity(task: CreateTaskDto): Promise<Task>
    updateEntity(taskById: Task, updateInfor: UpdateTaskDto): Promise<Task>
    deleteEntity(task: Task): Promise<void>
    getEntityById(taskId: number): Promise<Task | null>
    showListEntity(): Promise<Task[] | null>
    getByUserId(userId: number): Promise<Task | null>
}
