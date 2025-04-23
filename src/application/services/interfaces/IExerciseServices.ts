import { UpdateExerciseDto } from '@application/dto/exercise/UpdateExerciseDto';
import { CreateExerciseDto } from '../../dto/exercise/CreateExerciseDto';
import { Exercise } from '@domain/entities/Exercise';

export interface IExerciseServices {
  createEntity(exercise: CreateExerciseDto): Promise<void>;
  updateEntity(
    bodyTrackId: number,
    updateInfo: UpdateExerciseDto
  ): Promise<void>;
  deleteEntity(bodyTrackId: number): Promise<void>;
  getEntityById(bodyTrackId: number): Promise<Exercise | null>;
  showListEntity(): Promise<Exercise[] | null>;
}
