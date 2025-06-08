import { ISessionRepository } from '@domain/repositories/ISessionRepository';
import { Session } from '@domain/entities/Session';
import { Repository } from 'typeorm';
import { SessionsModel } from '@infra/databases/models/SessionsModel';
import { appDataSource } from '@infra/databases/dataSource/BootstrapTypeOrm';
import { UpdateSessionDto } from '@application/dto/session/UpdateSessionDto';
// import { ExercisesModel } from '@infra/databases/models/ExercisesModel';
import { SetsModel } from '@infra/databases/models/SetsModel';
import { Set } from '@domain/entities/Set';

export class SessionTypeOrmRepository implements ISessionRepository {
  constructor(
    private readonly repository: Repository<Session> = appDataSource.getRepository(
      SessionsModel
    ),
    private readonly sessionAlisas: string = 'session',
    private readonly planAlisas: string = 'plan',
    private readonly userAlias: string = 'user',
    private readonly setAlias: string = 'set',
    private readonly exerciseAlias: string = 'exercise'
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

  public async getByDateUserId(input: {
    date: Date;
    userId: number;
  }): Promise<Set[] | null> {
    const { date, userId } = input;
    const formattedDate = new Date(date).toISOString().slice(0, 10);
    return await appDataSource
      .getRepository(SetsModel)
      .createQueryBuilder(this.setAlias)
      .select([
        `${this.setAlias}.id as id`,
        `${this.setAlias}.weight as weight`,
        `${this.setAlias}.reps as reps`,
        `${this.setAlias}.restTime as restTime`,
        `${this.exerciseAlias}.name as name`,
        `${this.exerciseAlias}.imageUrl as imageUrl`,
        `${this.exerciseAlias}.targetMuscle1 as targetMuscle1`,
        `${this.exerciseAlias}.targetMuscle2 as targetMuscle2`,
        `${this.exerciseAlias}.targetMuscle3 as targetMuscle3`,
      ])
      .leftJoin(`${this.setAlias}.exercise`, this.exerciseAlias)
      .leftJoin(`${this.setAlias}.session`, this.sessionAlisas)
      .leftJoin(`${this.sessionAlisas}.plan`, this.planAlisas)
      .leftJoin(`${this.planAlisas}.user`, this.userAlias)
      .where(`CAST(${this.sessionAlisas}.date AS DATE) = :date`, {
        date: formattedDate,
      })
      .andWhere(`${this.userAlias}.id = :userId`, {
        userId,
      })
      .getRawMany();
  }
}
