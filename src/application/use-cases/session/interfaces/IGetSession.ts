import { Session } from '@domain/entities/Session';
import { Set } from '@domain/entities/Set';

export interface IGetSession {
  getAll(): Promise<Session[] | null>;
  getById(sessionId: number): Promise<Session | null>;
  getByPlanId(planId: number): Promise<Session[] | null>;
  getByDateUserId(input: { date: Date; userId: number }): Promise<Set[] | null>;
}
