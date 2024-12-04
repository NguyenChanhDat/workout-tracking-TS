import { CreateTaskDto } from '../../dto/task/createTaskDto'
import { Task } from '../../../domain/entities/Task'
import { ICreateTask } from './interface/ICreateTask'
import { ITaskServices } from '../../services/ITaskServices'

export class CreateTask implements ICreateTask {
    constructor(private readonly taskServices: ITaskServices) {}
    public execute = async (taskInput: CreateTaskDto): Promise<Task> => {
        const taskCreated: Task =
            await this.taskServices.createEntity(taskInput)
        return taskCreated
    }
}
