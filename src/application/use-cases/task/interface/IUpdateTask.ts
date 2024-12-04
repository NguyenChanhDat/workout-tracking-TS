import { UpdateTaskDto } from "../../../dto/task/updateTaskDto"
import { Task } from "../../../../domain/entities/Task"

export interface IUpdateTask {
    execute(inforInput: UpdateTaskDto): Promise<Task>
}
