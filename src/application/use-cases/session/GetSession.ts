import { IGetSession } from './interfaces/IGetSession';
import { ISessionServices } from '@application/services/interfaces/ISessionServices';
import { sessionServicesGlobal } from '@infra/locator/services/SessionServicesGlobal';
import { Session } from '@domain/entities/Session';

export class GetSession implements IGetSession {
  constructor(
    private readonly sessionServices: ISessionServices = sessionServicesGlobal
  ) {}

  public async getAll(): Promise<Session[] | null> {
    return await this.sessionServices.showListEntity();
  }

  public async getById(sessionId: number): Promise<Session | null> {
    return await this.sessionServices.getEntityById(sessionId);
  }

  public async getByPlanId(planId: number): Promise<Session[] | null> {
    return await this.sessionServices.getByPlanId(planId);
  }

  public async getByDateUserId(input: {
    date: Date;
    userId: number;
  }): Promise<Session[] | null> {
    const { date, userId } = input;
    return await this.sessionServices.getByDateUserId({ date, userId });
  }
}
