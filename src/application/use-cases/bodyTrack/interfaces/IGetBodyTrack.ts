import { BodyTrack } from '../../../../domain/entities/BodyTrack';

export interface IGetBodyTrack {
  getAll(): Promise<BodyTrack[] | null>;
  getById(id: number): Promise<BodyTrack | null>;
}
