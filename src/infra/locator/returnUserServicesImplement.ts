import { IUserServices } from '../../application/services/IUserServices';
import { UserServices } from '../../application/services/UserServices';

export function returnUserServicesImplement(): IUserServices {
  return new UserServices();
}
