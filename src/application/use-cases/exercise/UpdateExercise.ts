import { UpdateExerciseDto } from '../../dto/exercise/UpdateExerciseDto';
import { IUpdateExercise } from './interfaces/IUpdateExercise';
import { exerciseServicesGlobal } from '@infra/locator/ExerciseServicesGlobal';
import { IExerciseServices } from '@application/services/interfaces/IExerciseServices';

export class UpdateExercise implements IUpdateExercise {
  constructor(
    private readonly exerciseServices: IExerciseServices = exerciseServicesGlobal
  ) {}

  public execute = async (
    exerciseId: number,
    updateInfo: UpdateExerciseDto
  ): Promise<void> => {
    await this.exerciseServices.updateEntity(exerciseId, updateInfo);
  };
}
