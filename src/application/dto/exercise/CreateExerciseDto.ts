import { Exercise } from '../../../domain/entities/Exercise';

export type CreateExerciseDto = Omit<Exercise, 'id'>;
