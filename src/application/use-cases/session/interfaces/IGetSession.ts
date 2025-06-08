import { Session } from '@domain/entities/Session';

export interface IGetSession {
  getAll(): Promise<Session[] | null>;
  getById(sessionId: number): Promise<Session | null>;
  getByPlanId(planId: number): Promise<Session[] | null>;
  getByDateUserId(input: {
    date: Date;
    userId: number;
  }): Promise<Session[] | null>;
}
