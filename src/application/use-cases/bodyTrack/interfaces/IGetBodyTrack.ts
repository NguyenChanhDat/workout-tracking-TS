import { BodyTrack } from '../../../../domain/entities/BodyTrack';
import { GetBodyWeightByUserIdResponseDto } from '@application/dto/bodyTrack/GetBodyTrackDto';

export interface IGetBodyTrack {
  getAll(): Promise<BodyTrack[] | null>;
  getById(id: number): Promise<BodyTrack | null>;
  getBodyWeightByUserId(
    userId: number
  ): Promise<GetBodyWeightByUserIdResponseDto | null>;
}
