import { Exercise } from '../entities/Exercise';
import { EntityRepository } from './EntityRepository';

export interface IExerciseRepository extends EntityRepository<Exercise> {}
