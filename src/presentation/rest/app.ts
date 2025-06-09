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
const tokenVerifyMiddleware = new TokenVerifyMiddleware();

export const rest = (PORT: number) => {
  app.use(express.json());
  app.post('/login', userControllersGlobal.login);
  app.post('/signup', userControllersGlobal.signup);

  app.use('/user', tokenVerifyMiddleware.verifyToken, UserRoutes);
  app.use('/plan', tokenVerifyMiddleware.verifyToken, PlanRoutes);
  app.use('/set', tokenVerifyMiddleware.verifyToken, SetRoutes);
  app.use('/exercise', tokenVerifyMiddleware.verifyToken, ExerciseRoutes);
  app.use('/session', tokenVerifyMiddleware.verifyToken, SessionRoutes);
  app.use('/bodytrack', tokenVerifyMiddleware.verifyToken, BodyTrackRoutes);

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};
