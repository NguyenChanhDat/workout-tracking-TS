import { AssignTask, IAssignTask } from "../../application/use-cases/task/TaskUseCaseExportDir";

export function returnAssignTask():IAssignTask{
    return new AssignTask()
}