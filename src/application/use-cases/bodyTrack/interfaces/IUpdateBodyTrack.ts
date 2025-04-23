import { BodyTrack } from '../../../../domain/entities/BodyTrack';

export interface IUpdateBodyTrack {
  execute(bodyTrackInfo: BodyTrack): Promise<BodyTrack>;
}
