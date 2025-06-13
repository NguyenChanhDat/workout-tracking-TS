import { ISetRepository } from '@domain/repositories/ISetRepository';
import { Set } from '@domain/entities/Set';
import { SetsModel } from '@infra/databases/models/SetsModel';
import { appDataSource } from '@infra/databases/dataSource/BootstrapTypeOrm';
import { Repository } from 'typeorm';
import { UpdateSetDto } from '@application/dto/set/UpdateSetDto';
import { entitiesAlias } from './entitiesAlias';
import { GetAllByUserIdResponseDto } from '@application/dto/set/GetSetDto';

export class SetTypeOrmRepository implements ISetRepository {
  constructor(
    private readonly repository: Repository<Set> = appDataSource.getRepository(
      SetsModel
    )
  ) {}

  async createEntity(set: Set): Promise<void> {
    await this.repository.save(set);
  }

  async updateEntity(setId: number, set: Set): Promise<void> {
    const { id, ...rest } = set;
    const updateInfor: UpdateSetDto = rest;
    await this.repository.update(setId, updateInfor);
  }

  async deleteEntity(setId: number): Promise<void> {
    await this.repository.delete(setId);
  }

  async getEntityById(setId: number): Promise<Set | null> {
    const set = this.repository.findOne({ where: { id: setId } });
    return set;
  }

  async showListEntity(): Promise<Set[] | null> {
    return await this.repository.find();
  }

  async getExerciseBySessionId(sessionId: number): Promise<Set[]> {
    return await this.repository.findBy({ sessionId });
  }

  getAllByUserId = async (
    userId: number
  ): Promise<GetAllByUserIdResponseDto | null> => {
    return await this.repository
      .createQueryBuilder(entitiesAlias.set)
      .select([
        `${entitiesAlias.set}.id as id`,
        `${entitiesAlias.set}.weight as weight`,
        `${entitiesAlias.set}.reps as reps`,
        `${entitiesAlias.set}.restTime as restTime`,
        `${entitiesAlias.exercise}.name as name`,
        `${entitiesAlias.exercise}.id as exerciseId`,
        `FORMAT(${entitiesAlias.session}.date, 'yyyy-MM-dd') as date`,
      ])
      .leftJoin(
        `${entitiesAlias.set}.${entitiesAlias.session}`,
        entitiesAlias.session
      )
      .leftJoin(
        `${entitiesAlias.session}.${entitiesAlias.plan}`,
        entitiesAlias.plan
      )
      .leftJoin(
        `${entitiesAlias.plan}.${entitiesAlias.user}`,
        entitiesAlias.user
      )
      .leftJoin(
        `${entitiesAlias.set}.${entitiesAlias.exercise}`,
        entitiesAlias.exercise
      )
      .where(`${entitiesAlias.user}.id = :userId`, { userId })
      .getRawMany();
  };
}
