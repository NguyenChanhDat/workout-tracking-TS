import { Exercise } from '../../../../domain/entities/Exercise';

export interface IGetExercise {
  getAll(): Promise<Exercise[] | null>;
  getById(id: number): Promise<Exercise | null>;
}
