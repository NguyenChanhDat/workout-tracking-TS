import { PlanServices } from '../../services/PlanServices';
import { UpdatePlanDto } from '../../dto/plan/UpdatePlanDto';
import { IUpdatePlan } from './interfaces/IUpdatePlan';

export class UpdatePlan implements IUpdatePlan {
  constructor(private readonly planServices: PlanServices) {}

  public execute = async (
    planId: number,
    updateInfo: UpdatePlanDto
  ): Promise<void> => {
    await this.planServices.updateEntity(planId, updateInfo);
  };
}
