import { PlanServices } from '@application/services/PlanServices';
import { CreatePlanDto } from '@application/dto/plan/CreatePlanDto';
import { ICreatePlan } from './interfaces/ICreatePlan';

export class CreatePlan implements ICreatePlan {
  constructor(private readonly planServices: PlanServices) {}

  public execute = async (planInput: CreatePlanDto): Promise<void> => {
    await this.planServices.createEntity(planInput);
  };
}
