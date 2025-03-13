import { ExerciseServices } from '../../services/ExerciseServices';
import { CreateExerciseDto } from '@application/dto/exercise/CreateExerciseDto';
import { ICreateExercise } from './interfaces/ICreateExercise';

export class CreateExercise implements ICreateExercise {
  constructor(private readonly exerciseServices: ExerciseServices) {}

  public execute = async (exerciseInput: CreateExerciseDto): Promise<void> => {
    await this.exerciseServices.createEntity(exerciseInput);
  };
}
