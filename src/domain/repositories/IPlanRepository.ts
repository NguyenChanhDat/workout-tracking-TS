import { Plan } from '../entities/Plan';
import { EntityRepository } from './EntityRepository';

export interface IPlanRepository extends EntityRepository<Plan> {
  getByUserId(userId: number): Promise<Plan[] | null>;
}
