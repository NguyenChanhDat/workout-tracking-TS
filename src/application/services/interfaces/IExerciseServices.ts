import { CreateExerciseDto } from '../../dto/exercise/CreateExerciseDto';

export interface IExerciseServices {
  createEntity(exercise: CreateExerciseDto): Promise<void>;
}
