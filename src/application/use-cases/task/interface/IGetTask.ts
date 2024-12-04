import { Task } from "../../../../domain/entities/Task";

export interface IGetTask {
    executeById(taskId: number): Promise<Task>
    executeByUserId(userId: number): Promise<Task | null>
    getAll(): Promise<Task[] | null>
}
