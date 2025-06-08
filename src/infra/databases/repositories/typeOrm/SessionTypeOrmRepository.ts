import { ISessionRepository } from '@domain/repositories/ISessionRepository';
import { Session } from '@domain/entities/Session';
import { Repository } from 'typeorm';
import { SessionsModel } from '@infra/databases/models/SessionsModel';
import { appDataSource } from '@infra/databases/dataSource/BootstrapTypeOrm';
import { UpdateSessionDto } from '@application/dto/session/UpdateSessionDto';

export class SessionTypeOrmRepository implements ISessionRepository {
  constructor(
    private readonly repository: Repository<Session> = appDataSource.getRepository(
      SessionsModel
    )
  ) {}

  public async createEntity(session: Session): Promise<void> {
    await this.repository.save(session);
  }

  public async updateEntity(
    sessionId: number,
    session: Session
  ): Promise<void> {
    const { id, ...rest } = session;
    const updateInfor: UpdateSessionDto = rest;
    await this.repository.update(sessionId, updateInfor);
  }

  public async deleteEntity(sessionId: number): Promise<void> {
    await this.repository.delete(sessionId);
  }

  public async getEntityById(sessionId: number): Promise<Session | null> {
    return await this.repository.findOneBy({ id: sessionId });
  }

  public async showListEntity(): Promise<Session[] | null> {
    return await this.repository.find();
  }

  public async getByPlanId(planId: number): Promise<Session[] | null> {
    return await this.repository.find({ where: { planId } });
  }

  public async getByDate(date: Date): Promise<Session[] | null> {
    return await this.repository.find({ where: { date } });
  }
}
