import {
  CreateTask,
  DeleteTask,
  GetTask,
  ICreateTask,
  IDeleteTask,
  IGetTask,
  IUpdateTask,
  UpdateTask,
} from '../../application/use-cases/task/TaskUseCaseExportDir';

export const getTaskGlobal: IGetTask = new GetTask();
export const createTaskGlobal: ICreateTask = new CreateTask();
export const deleteTaskGlobal: IDeleteTask = new DeleteTask();
export const updateTaskGlobal: IUpdateTask = new UpdateTask();
