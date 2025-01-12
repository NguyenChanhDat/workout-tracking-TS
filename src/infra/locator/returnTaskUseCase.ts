import { CreateTask, DeleteTask, GetTask, ICreateTask, IDeleteTask, IGetTask, IUpdateTask, UpdateTask } from "../../application/use-cases/task/TaskUseCaseExportDir";

export function returnGetTask():IGetTask{
    return new GetTask()
}

export function returnCreateTask():ICreateTask{
    return new CreateTask()
}

export function returnDeleteTask():IDeleteTask{
    return new DeleteTask()
}

export function returnUpdateTask():IUpdateTask{
    return new UpdateTask()
}