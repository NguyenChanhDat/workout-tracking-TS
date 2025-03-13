import { UpdateExerciseDto } from "@application/dto/exercise/UpdateExerciseDto";
export interface IUpdateExercise {
  execute(exerciseId: number, updateInfo: UpdateExerciseDto): Promise<void>;
}
