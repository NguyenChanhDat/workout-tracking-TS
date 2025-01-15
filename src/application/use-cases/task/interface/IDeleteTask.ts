export interface IDeleteTask {
    executeById(taskId: number): Promise<number>
}
