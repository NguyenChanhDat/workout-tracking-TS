import { ExerciseServices } from '../../services/ExerciseServices';
import { UpdateExerciseDto } from '../../dto/exercise/UpdateExerciseDto';
import { IUpdateExercise } from './interfaces/IUpdateExercise';

export class UpdateExercise implements IUpdateExercise {
  constructor(private readonly exerciseServices: ExerciseServices) {}

  public execute = async (
    exerciseId: number,
    updateInfo: UpdateExerciseDto
  ): Promise<void> => {
    await this.exerciseServices.updateEntity(exerciseId, updateInfo);
  };
}
