import { UpdatePlanDto } from '../../../dto/plan/updatePlanDto';

export interface IUpdatePlan {
  execute(planId: number, updateInfo: UpdatePlanDto): Promise<void>;
}
