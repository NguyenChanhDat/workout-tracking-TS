import { Exercise } from '../../../../domain/entities/Exercise';

export interface IUpdateExercise {
  execute(exerciseInfo: Exercise): Promise<Exercise>;
}
