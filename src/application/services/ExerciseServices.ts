import { CreateExerciseDto } from '../dto/exercise/CreateExerciseDto';
import { IExerciseServices } from './interfaces/IExerciseServices';
import { exerciseRepositoryGlobal } from '../../infra/locator/RepositoryGlobal';
import { IExerciseRepository } from '../../domain/repositories/IExerciseRepository';

export class ExerciseServices implements IExerciseServices {
  constructor(
    private readonly exerciseRepository: IExerciseRepository = exerciseRepositoryGlobal
  ) {}

  public createEntity = async (
    exerciseInput: CreateExerciseDto
  ): Promise<void> => {
    await this.exerciseRepository.createEntity(exerciseInput);
    return Promise.resolve();
  };
}
