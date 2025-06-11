import { CreateSessionDto } from '@application/dto/session/CreateSessionDto';
import { UpdateSessionDto } from '@application/dto/session/UpdateSessionDto';
import { GetByDateUserIdResponse } from '@application/dto/set/GetSetDto';
import { Session } from '@domain/entities/Session';
export interface ISessionServices {
  createEntity(session: CreateSessionDto): Promise<void>;
  updateEntity(sessionId: number, session: UpdateSessionDto): Promise<void>;
  deleteEntity(sessionId: number): Promise<void>;
  getEntityById(sessionId: number): Promise<Session | null>;
  showListEntity(): Promise<Session[] | null>;
  getByPlanId(planId: number): Promise<Session[] | null>;
  getByDateUserId(input: {
    date: Date;
    userId: number;
  }): Promise<GetByDateUserIdResponse | null>;
}
