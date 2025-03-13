import { BodyTrackServices } from '../../services/BodyTrackServices';
import { UpdateBodyTrackDto } from '../../dto/bodyTrack/updateBodyTrackDto';
import { IUpdateBodyTrack } from './interfaces/IUpdateBodyTrack';

export class UpdateBodyTrack implements IUpdateBodyTrack {
  constructor(private readonly bodyTrackServices: BodyTrackServices) {}

  public execute = async (
    bodyTrackId: number,
    updateInfo: UpdateBodyTrackDto
  ): Promise<void> => {
    await this.bodyTrackServices.updateEntity(bodyTrackId, updateInfo);
  };
}
