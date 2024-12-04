import { ITaskServices } from '../../application/services/ITaskServices';
import { TaskServices } from '../../application/services/TaskServices';

export function returnTaskServicesImplement(): ITaskServices {
  return new TaskServices();
}
