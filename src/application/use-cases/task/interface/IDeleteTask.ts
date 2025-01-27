export interface IDeleteTask {
    executeById(taskId: number): Promise<void>
}
