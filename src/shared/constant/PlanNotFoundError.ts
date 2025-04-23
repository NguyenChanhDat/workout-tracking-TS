import { PlanApiStatus } from './ApiStatus';

export class PlanNotFoundError extends Error {
  status: number;
  override message: string;
  constructor() {
    super();
    this.status = PlanApiStatus.NOT_FOUND.status;
    this.message = PlanApiStatus.NOT_FOUND.message;
  }
}
