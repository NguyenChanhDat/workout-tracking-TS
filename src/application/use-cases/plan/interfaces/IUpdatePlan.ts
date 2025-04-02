import { UpdatePlanDto } from '../../../dto/plan/UpdatePlanDto';

export interface IUpdatePlan {
  execute(planId: number, updateInfo: UpdatePlanDto): Promise<void>;
}
