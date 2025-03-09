import { ITaskController } from '../../presentation/rest/controllers/task/ITaskControllers';
import { TaskController } from '../../presentation/rest/controllers/task/TaskController';

export const taskControllerGlobal: ITaskController = new TaskController();
