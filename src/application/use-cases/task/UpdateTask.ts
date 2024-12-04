import { IUpdateTask } from './interface/IUpdateTask'
import { UpdateTaskDto } from '../../dto/task/updateTaskDto'
import { Task } from '../../../domain/entities/Task'
import { ITaskServices } from '../../services/ITaskServices'

export class UpdateTask implements IUpdateTask {
    constructor(
        private readonly taskServices: ITaskServices
    ) {}
    public execute = async (inforInput: UpdateTaskDto): Promise<Task> => {
        const taskById: Task | null = await this.taskServices.getEntityById(
            inforInput.id
        )
        if (!taskById) {
            throw new Error()
        }
        return await this.taskServices.updateEntity(taskById, inforInput)
    }
}
