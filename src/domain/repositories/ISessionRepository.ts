import { GetSessionVolumeByUserIdResponseDto } from '@application/dto/session/GetSessionDto';
import { Session } from '../entities/Session';
import { EntityRepository } from './EntityRepository';
import { GetByDateUserIdResponse } from '@application/dto/set/GetSetDto';

export interface ISessionRepository extends EntityRepository<Session> {
  getByPlanId(planId: number): Promise<Session[] | null>;
  getByDateUserId(input: {
    date: Date;
    userId: number;
  }): Promise<GetByDateUserIdResponse | null>;
  getSessionVolumeByUserId(
    userId: number
  ): Promise<GetSessionVolumeByUserIdResponseDto| null>;
}
