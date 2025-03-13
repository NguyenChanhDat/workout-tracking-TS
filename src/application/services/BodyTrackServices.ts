import { CreateBodyTrackDto } from '../dto/bodyTrack/CreateBodyTrackDto';
import { UpdateBodyTrackDto } from '../dto/bodyTrack/updateBodyTrackDto';
import { IBodyTrackServices } from './interfaces/IBodyTrackServices';
import { bodyTrackRepositoryGlobal } from '@infra/locator/RepositoryGlobal';
import { IBodyTrackRepository } from '@domain/repositories/IBodyTrackRepository';

export class BodyTrackServices implements IBodyTrackServices {
  constructor(
    private readonly bodyTrackRepository: IBodyTrackRepository = bodyTrackRepositoryGlobal
  ) {}

  public createEntity = async (
    bodyTrackInput: CreateBodyTrackDto
  ): Promise<void> => {
    await this.bodyTrackRepository.createEntity(bodyTrackInput);
    return Promise.resolve();
  };

  public updateEntity = async (
    bodyTrackId: number,
    updateInfo: UpdateBodyTrackDto
  ): Promise<void> => {
    await this.bodyTrackRepository.updateEntity(bodyTrackId, updateInfo);
    return Promise.resolve();
  };
}
