import { Task } from "../../../domain/entities/Task";
export type CreateTaskDto = Omit<Task, 'id' | 'createdTime' | 'modifiedTime'>
