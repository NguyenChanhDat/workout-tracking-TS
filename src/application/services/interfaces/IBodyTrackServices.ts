import { CreateBodyTrackDto } from '../../dto/bodyTrack/CreateBodyTrackDto';

export interface IBodyTrackServices {
  createEntity(bodyTrack: CreateBodyTrackDto): Promise<void>;
}
