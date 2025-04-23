import { Plan } from '@domain/entities/Plan';

export interface IGetPlan {
  getByUserId(userId: number): Promise<Plan[] | null>;
  getAll(): Promise<Plan[] | null>;
  getById(id: number): Promise<Plan | null>;
}
