import { UpdateTaskDto } from "../../../dto/task/updateTaskDto"

export interface IUpdateTask {
    execute(inforInput: UpdateTaskDto): Promise<UpdateTaskDto>
}
