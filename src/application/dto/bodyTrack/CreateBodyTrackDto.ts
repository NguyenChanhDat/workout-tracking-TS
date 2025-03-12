import { BodyTrack } from "@domain/entities/BodyTrack";

export type CreateBodyTrackDto = Omit<BodyTrack, 'id'>;
