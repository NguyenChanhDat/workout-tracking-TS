import { GetBodyWeightByUserIdResponseDto } from '@application/dto/bodyTrack/GetBodyTrackDto';
import { BodyTrack } from '../entities/BodyTrack';
import { EntityRepository } from './EntityRepository';

export interface IBodyTrackRepository extends EntityRepository<BodyTrack> {
  getBodyWeightByUserId(
    userId: number
  ): Promise<GetBodyWeightByUserIdResponseDto | null>;
}
