import { TaskServices } from '../../../src/application/services/TaskServices';
import { ITaskRepository } from '../../../src/domain/repositories/ITaskRepository';
import { CreateTaskDto } from '../../../src/application/dto/task/createTaskDto';
import { UpdateTaskDto } from '../../../src/application/dto/task/updateTaskDto';
import { Task } from '../../../src/domain/entities/Task';

class MockTaskRepository implements ITaskRepository {
  createEntity = jest.fn();
  updateEntity = jest.fn();
  deleteEntity = jest.fn();
  getEntityById = jest.fn();
  showListEntity = jest.fn();
  getByUserId = jest.fn();
}

describe('TaskServices', () => {
  let taskServices: TaskServices;
  let mockTaskRepository: MockTaskRepository;

  beforeEach(() => {
    mockTaskRepository = new MockTaskRepository();
    taskServices = new TaskServices(mockTaskRepository);
  });

  it('should create a new task', async () => {
    const taskInput: CreateTaskDto = {
      title: 'Test Task',
      description: 'Test Description',
    };
    await taskServices.createEntity(taskInput);

    expect(mockTaskRepository.createEntity).toHaveBeenCalledWith(taskInput);
  });

  it('should update an existing task', async () => {
    const taskId = 1;
    const updateInfor: UpdateTaskDto = {
      id: taskId,
      title: 'Updated Task',
      description: 'Updated Description',
    };
    await taskServices.updateEntity(taskId, updateInfor);

    expect(mockTaskRepository.updateEntity).toHaveBeenCalledWith(
      taskId,
      updateInfor
    );
  });

  it('should delete a task by id', async () => {
    const taskId = 1;
    await taskServices.deleteEntity(taskId);

    expect(mockTaskRepository.deleteEntity).toHaveBeenCalledWith(taskId);
  });

  it('should get a task by id', async () => {
    const taskId = 1;
    const task: Task = {
      id: taskId,
      title: 'Test Task',
      description: 'Test Description',
      createdTime: new Date().toISOString(),
    };
    mockTaskRepository.getEntityById.mockResolvedValue(task);

    const result = await taskServices.getEntityById(taskId);

    expect(result).toEqual(task);
    expect(mockTaskRepository.getEntityById).toHaveBeenCalledWith(taskId);
  });

  it('should return null if task does not exist', async () => {
    const taskId = 1;
    mockTaskRepository.getEntityById.mockResolvedValue(null);

    const result = await taskServices.getEntityById(taskId);

    expect(result).toBeNull();
    expect(mockTaskRepository.getEntityById).toHaveBeenCalledWith(taskId);
  });

  it('should show list of tasks', async () => {
    const tasks: Task[] = [
      {
        id: 1,
        title: 'Task 1',
        description: 'Description 1',
        createdTime: new Date().toISOString(),
      },
      {
        id: 2,
        title: 'Task 2',
        description: 'Description 2',
        createdTime: new Date().toISOString(),
      },
    ];
    mockTaskRepository.showListEntity.mockResolvedValue(tasks);

    const result = await taskServices.showListEntity();

    expect(result).toEqual(tasks);
    expect(mockTaskRepository.showListEntity).toHaveBeenCalled();
  });

  it('should get tasks by user id', async () => {
    const userId = 1;
    const tasks: Task[] = [
      {
        id: 1,
        title: 'Task 1',
        description: 'Description 1',
        createdTime: new Date().toISOString(),
      },
      {
        id: 2,
        title: 'Task 2',
        description: 'Description 2',
        createdTime: new Date().toISOString(),
      },
    ];
    mockTaskRepository.getByUserId.mockResolvedValue(tasks);

    const result = await taskServices.getByUserId(userId);

    expect(result).toEqual(tasks);
    expect(mockTaskRepository.getByUserId).toHaveBeenCalledWith(userId);
  });
});
