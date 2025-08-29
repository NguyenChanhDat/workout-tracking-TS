import { BodyTrackController } from '@presentation/rest/controllers/bodyTrack/BodyTrackController';
import { IBodyTrackController } from '@presentation/rest/controllers/bodyTrack/IBodyTrackController';

export const bodyTrackControllersGlobal: IBodyTrackController =
  new BodyTrackController();
// Pass the required use cases here
