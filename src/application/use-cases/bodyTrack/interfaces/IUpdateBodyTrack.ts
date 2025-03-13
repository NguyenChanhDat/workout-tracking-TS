import { UpdateBodyTrackDto } from '../../../dto/bodyTrack/updateBodyTrackDto';

export interface IUpdateBodyTrack {
  execute(bodyTrackId: number, updateInfo: UpdateBodyTrackDto): Promise<void>;
}
