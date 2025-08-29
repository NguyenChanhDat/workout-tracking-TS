import { BodyTrack } from '@domain/entities/BodyTrack';
import { CreateBodyTrackDto } from '../../dto/bodyTrack/CreateBodyTrackDto';
import { UpdateBodyTrackDto } from '../../dto/bodyTrack/UpdateBodyTrackDto';
import { GetBodyWeightByUserIdResponseDto } from '@application/dto/bodyTrack/GetBodyTrackDto';

export interface IBodyTrackServices {
  createEntity(bodyTrack: CreateBodyTrackDto): Promise<void>;
  updateEntity(
    bodyTrackId: number,
    updateInfo: UpdateBodyTrackDto
  ): Promise<void>;
  deleteEntity(bodyTrackId: number): Promise<void>;
  getEntityById(bodyTrackId: number): Promise<BodyTrack | null>;
  showListEntity(): Promise<BodyTrack[] | null>;
  getBodyWeightByUserId(
    userId: number
  ): Promise<GetBodyWeightByUserIdResponseDto | null>;
}
