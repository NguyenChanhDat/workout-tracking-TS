import { UpdateExerciseDto } from '../../../dto/exercise/updateExerciseDto';

export interface IUpdateExercise {
  execute(exerciseId: number, updateInfo: UpdateExerciseDto): Promise<void>;
}
