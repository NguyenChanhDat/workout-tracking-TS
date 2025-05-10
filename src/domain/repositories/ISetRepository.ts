import { Set } from '../entities/Set';
import { EntityRepository } from './EntityRepository';

export interface ISetRepository extends EntityRepository<Set> {
  getExerciseBySessionId(sessionId: number): Promise<Set[]>;
}
