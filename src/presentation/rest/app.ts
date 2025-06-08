import express from 'express';
import cors from 'cors';

import { UserRoutes } from './routes/UserRoutes';
import { PlanRoutes } from './routes/PlanRoutes';
import { SetRoutes } from './routes/SetRoutes';
import { ExerciseRoutes } from './routes/ExerciseRoutes';
import { SessionRoutes } from './routes/SessionRoutes';
import { BodyTrackRoutes } from './routes/BodyTrackRoutes';
import { TokenVerifyMiddleware } from './middlewares/verifyToken';
import { userControllersGlobal } from '@infra/locator/controllers/UserControllersGlobal';

const app = express();

app.use(cors());

export const rest = (PORT: number) => {
  app.use(express.json());
  app.post('/login', userControllersGlobal.login);
  app.post('/signup', userControllersGlobal.signup);
  app.use('/user', new TokenVerifyMiddleware().verifyToken);
  app.use('/user', UserRoutes);
  app.use('/plan', new TokenVerifyMiddleware().verifyToken);
  app.use('/plan', PlanRoutes);
  app.use('/set', new TokenVerifyMiddleware().verifyToken);
  app.use('/set', SetRoutes);
  app.use('/exercise', new TokenVerifyMiddleware().verifyToken);
  app.use('/exercise', ExerciseRoutes);
  app.use('/session', new TokenVerifyMiddleware().verifyToken);
  app.use('/session', SessionRoutes);
  app.use('/bodytrack', new TokenVerifyMiddleware().verifyToken);
  app.use('/bodytrack', BodyTrackRoutes);

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};
