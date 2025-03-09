import { CreateTaskDto } from '../../../../application/dto/task/createTaskDto';
import { Task } from '../../../../domain/entities/Task';
import { TaskApiStatus } from '../../../../shared/constant/ApiStatus';
import { ITaskController } from './ITaskControllers';
import { Response, Request } from 'express';
import { TaskNotFoundError } from '../../../../shared/constant/TaskNotFoundError';
import {
  IAssignTask,
  ICreateTask,
  IDeleteTask,
  IGetTask,
  IUpdateTask,
} from '../../../../application/use-cases/task/TaskUseCaseExportDir';
import {
  createTaskGlobal,
  deleteTaskGlobal,
  getTaskGlobal,
  updateTaskGlobal,
} from '../../../../infra/locator/TaskUseCaseGlobal';
import { UpdateTaskDto } from '../../../../application/dto/task/updateTaskDto';
import { UserNotFoundError } from '../../../../shared/constant/UserNotFoundError';
import { NoTaskIdError } from '../../../../shared/constant/NoTaskIdError';
import { NoUserIdError } from '../../../../shared/constant/NoUserIdError';
import { assignTaskGlobal } from '../../../../infra/locator/AssignTaskGlobal';

export class TaskController implements ITaskController {
  constructor(
    private readonly createTask: ICreateTask = createTaskGlobal,
    private readonly deleteTask: IDeleteTask = deleteTaskGlobal,
    private readonly getTask: IGetTask = getTaskGlobal,
    private readonly updateTask: IUpdateTask = updateTaskGlobal,
    private readonly assignTask: IAssignTask = assignTaskGlobal
  ) {}

  public create = async (req: Request, res: Response): Promise<void> => {
    try {
      const taskData: CreateTaskDto = req.body;
      const taskCreated = await this.createTask.execute(taskData);
      res.status(TaskApiStatus.OK.status);
      res.send({
        message: TaskApiStatus.OK.message,
        data: taskCreated,
      });
    } catch (error) {
      console.log(error);
      res.status(TaskApiStatus.INTERNAL_SERVER_ERROR.status);
      res.send(TaskApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  };

  public update = async (req: Request, res: Response): Promise<void> => {
    try {
      const taskData: UpdateTaskDto = req.body;
      const taskUpdated = await this.updateTask.execute(taskData);
      if (!taskUpdated) {
        throw new TaskNotFoundError();
      }
      res.status(TaskApiStatus.OK.status);
      res.send({
        message: TaskApiStatus.OK.message,
        data: taskUpdated,
      });
    } catch (error) {
      console.error(error);
      if (error instanceof TaskNotFoundError) {
        res.status(error.status);
        res.send(error.message);
        return;
      }
      res.status(TaskApiStatus.INTERNAL_SERVER_ERROR.status);
      res.send(TaskApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  };

  public delete = async (req: Request, res: Response): Promise<void> => {
    try {
      const taskId = parseInt(req.query.id as string);
      await this.deleteTask.executeById(taskId);
      res.status(TaskApiStatus.OK.status);
      res.send(TaskApiStatus.OK.message);
    } catch (error) {
      console.error(error);
      if (error instanceof TaskNotFoundError) {
        res.status(error.status);
        res.send(error.message);
        return;
      }
      res.status(TaskApiStatus.INTERNAL_SERVER_ERROR.status);
      res.send(TaskApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  };

  public get = async (req: Request, res: Response): Promise<void> => {
    try {
      const taskByInput: Task | Task[] | null =
        'id' in req.query
          ? await this.getTask.executeById(Number(req.query.id))
          : 'userId' in req.query
          ? await this.getTask.executeByUserId(Number(req.query.userId))
          : await this.getTask.getAll();
      res.status(TaskApiStatus.OK.status);
      res.send(taskByInput);
    } catch (error) {
      console.error(error);
      if (error instanceof TaskNotFoundError) {
        res.status(error.status);
        res.send(error.message);
        return;
      }
      console.log(error);

      res.status(TaskApiStatus.INTERNAL_SERVER_ERROR.status);
      res.send(TaskApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  };
  public assignTaskController = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      await this.assignTask.execute(req.body.taskId, req.body.userId);
      res.status(TaskApiStatus.OK.status);
      res.send(TaskApiStatus.OK.message);
    } catch (error) {
      console.error(error);
      if (error instanceof TaskNotFoundError) {
        res.status(error.status);
        res.send(error.message);
        return;
      }
      if (error instanceof UserNotFoundError) {
        res.status(error.status);
        res.send(error.message);
        return;
      }
      if (error instanceof NoTaskIdError) {
        res.status(error.status);
        res.send(error.message);
        return;
      }
      if (error instanceof NoUserIdError) {
        res.status(error.status);
        res.send(error.message);
        return;
      }
      res.status(TaskApiStatus.INTERNAL_SERVER_ERROR.status);
      res.send(TaskApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  };
}
