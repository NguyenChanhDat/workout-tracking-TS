import { ISetRepository } from '@domain/repositories/ISetRepository';
import { Set } from '@domain/entities/Set';
import { SetsModel } from '@infra/databases/models/SetsModel';
import { appDataSource } from '@infra/databases/dataSource/BootstrapTypeOrm';
import { Repository } from 'typeorm';
import { UpdateSetDto } from '@application/dto/set/UpdateSetDto';

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
}
