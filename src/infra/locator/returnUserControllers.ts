import { IUserController } from '../../presentation/rest/controllers/user/IUserControllers';
import { UserController } from '../../presentation/rest/controllers/user/UserController';

export function returnUserControllers(): IUserController {
  return new UserController();
}
