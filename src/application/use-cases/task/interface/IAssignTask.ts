import { Task } from "../../../../domain/entities/Task";

export interface IAssignTask {
    execute(taskId: number, userId: number): Promise<Task>
}
