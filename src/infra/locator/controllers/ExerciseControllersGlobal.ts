import { ExerciseController } from '@presentation/rest/controllers/exercise/ExerciseController';
import { IExerciseController } from '@presentation/rest/controllers/exercise/IExerciseController';

export const exerciseControllersGlobal: IExerciseController =
  new ExerciseController();
// Pass the required use cases here
