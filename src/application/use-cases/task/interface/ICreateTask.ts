import { CreateTaskDto } from "../../../dto/task/createTaskDto"
import { Task } from "../../../../domain/entities/Task"

export interface ICreateTask {
    execute(taskInput: CreateTaskDto): Promise<Task>
}
