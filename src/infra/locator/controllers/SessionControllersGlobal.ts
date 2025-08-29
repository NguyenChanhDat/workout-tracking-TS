import { ISessionController } from '@presentation/rest/controllers/session/ISessionController';
import { SessionController } from '@presentation/rest/controllers/session/SessionController';

export const sessionControllersGlobal: ISessionController =
  new SessionController();
// Pass the required use cases here
