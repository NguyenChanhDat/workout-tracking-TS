import { BodyTrack } from '../../../domain/entities/BodyTrack';

export type UpdateBodyTrackDto = Pick<
  BodyTrack,
  'id' | 'weight' | 'height' | 'date'
>;
