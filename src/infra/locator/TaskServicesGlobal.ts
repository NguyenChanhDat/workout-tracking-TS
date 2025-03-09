import { ITaskServices } from '../../application/services/ITaskServices';
import { TaskServices } from '../../application/services/TaskServices';

export const taskServicesGlobal: ITaskServices = new TaskServices();
