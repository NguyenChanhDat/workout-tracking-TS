import { ISetRepository } from '../../../../domain/repositories/ISetRepository';
import { Set } from '../../../../domain/entities/Set';
import { SetModel } from '@infra/databases/models/SetModel';
import { appDataSource } from '@infra/databases/dataSource/BootstrapTypeOrm';

export class SetTypeOrmRepository implements ISetRepository {
  async createEntity(set: Set): Promise<void> {
    await appDataSource.getRepository(SetModel).save(set);
  }

  async updateEntity(setId: number, set: Partial<Set>): Promise<void> {
    await appDataSource.getRepository(SetModel).update(setId, set);
  }

  async deleteEntity(setId: number): Promise<void> {
    await appDataSource.getRepository(SetModel).delete(setId);
  }

  async getEntityById(setId: number): Promise<Set | null> {
    const set = await appDataSource
      .getRepository(SetModel)
      .findOne({ where: { id: setId } });
    return set;
  }

  async showListEntity(): Promise<Set[] | null> {
    return await appDataSource.getRepository(SetModel).find();
  }
}
