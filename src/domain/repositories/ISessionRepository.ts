import { Set } from '@domain/entities/Set';
import { Session } from '../entities/Session';
import { EntityRepository } from './EntityRepository';

export interface ISessionRepository extends EntityRepository<Session> {
  getByPlanId(planId: number): Promise<Session[] | null>;
  getByDateUserId(input: { date: Date; userId: number }): Promise<Set[] | null>;
}
