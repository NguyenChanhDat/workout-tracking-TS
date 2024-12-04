import { IDeleteTask } from './interface/IDeleteTask'
import { Task } from '../../../domain/entities/Task'
import { ITaskServices } from '../../services/ITaskServices'

export class DeleteTask implements IDeleteTask {
    constructor(
        private readonly taskServices: ITaskServices
    ) {}
    public executeById = async (taskId: number): Promise<void> => {
        const taskById: Task | null =
            await this.taskServices.getEntityById(taskId)
        if (!taskById) {
            throw new Error()
        }
        await this.taskServices.deleteEntity(taskById)
        return Promise.resolve()
    }
}
