import { AssignTask, IAssignTask } from "../../application/use-cases/Task/TaskUseCaseExportDir";

export function returnAssignTask():IAssignTask{
    return new AssignTask()
}