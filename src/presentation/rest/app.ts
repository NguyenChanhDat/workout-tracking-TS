import express from 'express';
import { UserRoutes } from './routes/UserRoutes';
import cors from 'cors';

const app = express();

app.use(cors());
export const rest = (PORT: number) => {
  app.use(express.json());
  app.use('/user', UserRoutes);
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};
