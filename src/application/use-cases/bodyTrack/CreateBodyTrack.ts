import { BodyTrackServices } from '@application/services/BodyTrackServices';
import { CreateBodyTrackDto } from '@application/dto/bodyTrack/CreateBodyTrackDto';
import { ICreateBodyTrack } from './interfaces/ICreateBodyTrack';

export class CreateBodyTrack implements ICreateBodyTrack {
  constructor(private readonly bodyTrackServices: BodyTrackServices) {}

  public execute = async (
    bodyTrackInput: CreateBodyTrackDto
  ): Promise<void> => {
    await this.bodyTrackServices.createEntity(bodyTrackInput);
  };
}
