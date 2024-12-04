import { ITaskController } from '../../presentation/rest/controllers/task/ITaskControllers';
import { TaskController } from '../../presentation/rest/controllers/task/TaskController';

export function returnTaskControllers(): ITaskController {
  return new TaskController();
}
