import { UpdateBodyTrackDto } from '../../../dto/bodyTrack/UpdateBodyTrackDto';

export interface IUpdateBodyTrack {
  execute(bodyTrackId: number, updateInfo: UpdateBodyTrackDto): Promise<void>;
}
