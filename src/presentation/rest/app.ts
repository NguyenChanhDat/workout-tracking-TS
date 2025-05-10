import express from 'express';
import cors from 'cors';

import { UserRoutes } from './routes/UserRoutes';
import { PlanRoutes } from './routes/PlanRoutes';
import { SetRoutes } from './routes/SetRoutes';
import { ExerciseRoutes } from './routes/ExerciseRoutes';
import { SessionRoutes } from './routes/SessionRoutes';
import { BodyTrackRoutes } from './routes/BodyTrackRoutes';

const app = express();

app.use(cors());

export const rest = (PORT: number) => {
  app.use(express.json());
  app.use('/user', UserRoutes);
  app.use('/plan', PlanRoutes);
  app.use('/set', SetRoutes);
  app.use('/exercise', ExerciseRoutes);
  app.use('/session', SessionRoutes);
  app.use('/bodytrack', BodyTrackRoutes);

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};
