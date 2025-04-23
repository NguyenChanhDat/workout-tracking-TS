import { UpdateBodyTrackDto } from '../../dto/bodyTrack/UpdateBodyTrackDto';
import { IUpdateBodyTrack } from './interfaces/IUpdateBodyTrack';
import { bodyTrackServicesGlobal } from '@infra/locator/BodyTrackServicesGlobal';
import { IBodyTrackServices } from '@application/services/interfaces/IBodyTrackServices';

export class UpdateBodyTrack implements IUpdateBodyTrack {
  constructor(
    private readonly bodyTrackServices: IBodyTrackServices = bodyTrackServicesGlobal
  ) {}

  public execute = async (
    bodyTrackId: number,
    updateInfo: UpdateBodyTrackDto
  ): Promise<void> => {
    await this.bodyTrackServices.updateEntity(bodyTrackId, updateInfo);
  };
}
