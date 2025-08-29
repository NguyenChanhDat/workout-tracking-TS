import { BodyTrack } from '@domain/entities/BodyTrack';

export type GetBodyWeightByUserIdResponseDto = Omit<BodyTrack, 'userId'>[];
