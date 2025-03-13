import { CreateExerciseDto } from '../dto/exercise/CreateExerciseDto';
import { UpdateExerciseDto } from '../dto/exercise/updateExerciseDto';
import { IExerciseServices } from './interfaces/IExerciseServices';
import { exerciseRepositoryGlobal } from '@infra/locator/RepositoryGlobal';
import { IExerciseRepository } from '@domain/repositories/IExerciseRepository';

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

  public updateEntity = async (
    exerciseId: number,
    updateInfo: UpdateExerciseDto
  ): Promise<void> => {
    await this.exerciseRepository.updateEntity(exerciseId, updateInfo);
    return Promise.resolve();
  };
}
