import { ISessionRepository } from '@domain/repositories/ISessionRepository';
import { Session } from '@domain/entities/Session';
import { Repository } from 'typeorm';
import { SessionsModel } from '@infra/databases/models/SessionsModel';
import { appDataSource } from '@infra/databases/dataSource/BootstrapTypeOrm';
import { UpdateSessionDto } from '@application/dto/session/UpdateSessionDto';
// import { ExercisesModel } from '@infra/databases/models/ExercisesModel';
import { SetsModel } from '@infra/databases/models/SetsModel';
import { GetByDateUserIdResponse } from '@application/dto/set/GetSetDto';
import { entitiesAlias } from './entitiesAlias';
import { GetSessionVolumeByUserIdResponseDto } from '@application/dto/session/GetSessionDto';

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

  public async getByDateUserId(input: {
    date: Date;
    userId: number;
  }): Promise<GetByDateUserIdResponse | null> {
    const { date, userId } = input;
    const formattedDate = new Date(date).toISOString().slice(0, 10);
    return await appDataSource
      .getRepository(SetsModel)
      .createQueryBuilder(entitiesAlias.set)
      .select([
        `${entitiesAlias.set}.id as id`,
        `${entitiesAlias.set}.weight as weight`,
        `${entitiesAlias.set}.reps as reps`,
        `${entitiesAlias.set}.restTime as restTime`,
        `${entitiesAlias.exercise}.name as name`,
        `${entitiesAlias.exercise}.imageUrl as imageUrl`,
        `${entitiesAlias.exercise}.targetMuscle1 as targetMuscle1`,
        `${entitiesAlias.exercise}.targetMuscle2 as targetMuscle2`,
        `${entitiesAlias.exercise}.targetMuscle3 as targetMuscle3`,
      ])
      .leftJoin(`${entitiesAlias.set}.exercise`, entitiesAlias.exercise)
      .leftJoin(`${entitiesAlias.set}.session`, entitiesAlias.session)
      .leftJoin(`${entitiesAlias.session}.plan`, entitiesAlias.plan)
      .leftJoin(`${entitiesAlias.plan}.user`, entitiesAlias.user)
      .where(`CAST(${entitiesAlias.session}.date AS DATE) = :date`, {
        date: formattedDate,
      })
      .andWhere(`${entitiesAlias.user}.id = :userId`, {
        userId,
      })
      .getRawMany();
  }

  getSessionVolumeByUserId = async (
    userId: number
  ): Promise<GetSessionVolumeByUserIdResponseDto | null> => {
    return await appDataSource
      .getRepository(SetsModel)
      .createQueryBuilder(entitiesAlias.set)
      .select([
        `FORMAT(${entitiesAlias.session}.date, 'yyyy-MM-dd') as date`,
        `SUM(${entitiesAlias.set}.weight * ${entitiesAlias.set}.reps) as volume`,
      ])
      .leftJoin(`${entitiesAlias.set}.session`, entitiesAlias.session)
      .leftJoin(`${entitiesAlias.session}.plan`, entitiesAlias.plan)
      .leftJoin(`${entitiesAlias.plan}.user`, entitiesAlias.user)
      .where(`${entitiesAlias.user}.id = :userId`, { userId })
      .groupBy(`FORMAT(${entitiesAlias.session}.date, 'yyyy-MM-dd')`)
      .orderBy(`FORMAT(${entitiesAlias.session}.date, 'yyyy-MM-dd')`, 'ASC')
      .getRawMany();
  };
}
