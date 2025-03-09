import { IUserServices } from '../../application/services/IUserServices';
import { UserServices } from '../../application/services/UserServices';

export const userServicesGlobal: IUserServices = new UserServices();
