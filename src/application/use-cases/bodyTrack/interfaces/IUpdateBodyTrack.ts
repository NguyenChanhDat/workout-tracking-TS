import { UpdateBodyTrackDto } from '../../../dto/bodyTrack/UpdateBodyTrackDto';

export interface IUpdateBodyTrack {
  execute(id: number, updateInfo: UpdateBodyTrackDto): Promise<void>;
}
