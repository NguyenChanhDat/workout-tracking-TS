import { CreateSessionDto } from '@application/dto/session/CreateSessionDto';
import { UpdateSessionDto } from '@application/dto/session/UpdateSessionDto';
import { Session } from '@domain/entities/Session';
import { Set } from '@domain/entities/Set';

export interface ISessionServices {
  createEntity(session: CreateSessionDto): Promise<void>;
  updateEntity(sessionId: number, session: UpdateSessionDto): Promise<void>;
  deleteEntity(sessionId: number): Promise<void>;
  getEntityById(sessionId: number): Promise<Session | null>;
  showListEntity(): Promise<Session[] | null>;
  getByPlanId(planId: number): Promise<Session[] | null>;
  getByDateUserId(input: { date: Date; userId: number }): Promise<Set[] | null>;
}
