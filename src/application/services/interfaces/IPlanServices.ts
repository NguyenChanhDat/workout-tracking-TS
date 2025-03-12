import { CreatePlanDto } from '../../dto/plan/CreatePlanDto';

export interface IPlanServices {
  createEntity(plan: CreatePlanDto): Promise<void>;
}
