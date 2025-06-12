import { GetByDateUserIdResponse } from '@application/dto/set/GetSetDto';
import { Session } from '@domain/entities/Session';
import { GetSessionVolumeByUserIdResponseDto } from '@application/dto/session/GetSessionDto';

export interface IGetSession {
  getAll(): Promise<Session[] | null>;
  getById(sessionId: number): Promise<Session | null>;
  getByPlanId(planId: number): Promise<Session[] | null>;
  getByDateUserId(input: {
    date: Date;
    userId: number;
  }): Promise<GetByDateUserIdResponse | null>;
  getSessionVolumeByUserId(
    userId: number
  ): Promise<GetSessionVolumeByUserIdResponseDto| null>;
}
