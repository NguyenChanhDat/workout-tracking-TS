import { Plan } from '@domain/entities/Plan';
import { CreatePlanDto } from '../../dto/plan/CreatePlanDto';

export interface IPlanServices {
  createEntity(plan: CreatePlanDto): Promise<void>;
  getByUserId(userId: number): Promise<Plan[] | null>;
  deleteEntity(planId: number): Promise<void>;
  getEntityById(planId: number): Promise<Plan | null>;
  showListEntity(): Promise<Plan[] | null>;
  updateEntity(planId: number, plan: Partial<Plan>): Promise<void>;
}
