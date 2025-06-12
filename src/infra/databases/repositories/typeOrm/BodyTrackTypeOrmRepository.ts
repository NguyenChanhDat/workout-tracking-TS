import { IBodyTrackRepository } from '../../../../domain/repositories/IBodyTrackRepository';
import { BodyTrack } from '../../../../domain/entities/BodyTrack';
import { BodyTracksModel } from '@infra/databases/models/BodyTracksModel';
import { appDataSource } from '@infra/databases/dataSource/BootstrapTypeOrm';
import { Repository } from 'typeorm';
import { UpdateBodyTrackDto } from '@application/dto/bodyTrack/UpdateBodyTrackDto';
import { GetBodyWeightByUserIdResponseDto } from '@application/dto/bodyTrack/GetBodyTrackDto';
import { entitiesAlias } from './entitiesAlias';

export class BodyTrackTypeOrmRepository implements IBodyTrackRepository {
  constructor(
    private readonly repository: Repository<BodyTrack> = appDataSource.getRepository(
      BodyTracksModel
    )
  ) {}

  async createEntity(bodyTrack: BodyTrack): Promise<void> {
    await this.repository.save(bodyTrack);
  }

  async updateEntity(bodyTrackId: number, bodyTrack: BodyTrack): Promise<void> {
    const { id, ...rest } = bodyTrack;
    const updateInfor: Omit<UpdateBodyTrackDto, 'id'> = rest;
    await this.repository.update(bodyTrackId, updateInfor);
  }

  async deleteEntity(bodyTrackId: number): Promise<void> {
    await this.repository.delete(bodyTrackId);
  }

  async getEntityById(bodyTrackId: number): Promise<BodyTrack | null> {
    return await this.repository.findOne({ where: { id: bodyTrackId } });
  }

  async showListEntity(): Promise<BodyTrack[] | null> {
    return await this.repository.find();
  }
  getBodyWeightByUserId = async (
    userId: number
  ): Promise<GetBodyWeightByUserIdResponseDto | null> => {
    return await this.repository
      .createQueryBuilder(entitiesAlias.bodyTrack)
      .select([
        `${entitiesAlias.bodyTrack}.id`,
        `${entitiesAlias.bodyTrack}.weight`,
        `${entitiesAlias.bodyTrack}.height`,
        `${entitiesAlias.bodyTrack}.date`,
      ])
      .where(`${entitiesAlias.bodyTrack}.userId = :userId`, { userId })
      .orderBy(`${entitiesAlias.bodyTrack}.date`, `DESC`)
      .getMany();
  };
}
