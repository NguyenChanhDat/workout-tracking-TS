import { ExerciseApiStatus } from './ApiStatus';

export class ExerciseNotFoundError extends Error {
  status: number;
  override message: string;
  constructor() {
    super();
    this.status = ExerciseApiStatus.NOT_FOUND.status;
    this.message = ExerciseApiStatus.NOT_FOUND.message;
  }
}
