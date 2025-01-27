import { Task } from '../entities/Task'
import { EntityRepository } from './EntityRepository'

export interface ITaskRepository extends EntityRepository<Task> {
    // createEntity(task: CreateTaskDto): Promise<void>
    // updateEntity(taskId: number, updateInfor: UpdateTaskDto): Promise<void>
    // deleteEntity(taskId: number): Promise<void>
    // getEntityById(taskId: number): Promise<Task | null>
    // showListEntity(): Promise<Task[] | null>
    getByUserId(userId: number): Promise<Task[] | null>
}
