import { Task } from "../../../domain/entities/Task";


export type UpdateTaskDto = Omit<Task, 'createdTime'>
