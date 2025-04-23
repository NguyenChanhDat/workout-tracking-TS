import { IBodyTrackRepository } from '../../../../domain/repositories/IBodyTrackRepository';
import { BodyTrack } from '../../../../domain/entities/BodyTrack';
import { BodyTrackModel } from '@infra/databases/models/BodyTrackModel';
import { appDataSource } from '@infra/databases/dataSource/BootstrapTypeOrm';

export class BodyTrackTypeOrmRepository implements IBodyTrackRepository {
  async createEntity(bodyTrack: BodyTrack): Promise<void> {
    await appDataSource.getRepository(BodyTrackModel).save(bodyTrack);
  }

  async updateEntity(
    bodyTrackId: number,
    bodyTrack: Partial<BodyTrack>
  ): Promise<void> {
    await appDataSource
      .getRepository(BodyTrackModel)
      .update(bodyTrackId, bodyTrack);
  }

  async deleteEntity(bodyTrackId: number): Promise<void> {
    await appDataSource.getRepository(BodyTrackModel).delete(bodyTrackId);
  }

  async getEntityById(bodyTrackId: number): Promise<BodyTrack | null> {
    return await appDataSource
      .getRepository(BodyTrackModel)
      .findOne({ where: { id: bodyTrackId } });
  }

  async showListEntity(): Promise<BodyTrack[] | null> {
    return await appDataSource.getRepository(BodyTrackModel).find();
  }
}
