import { CreatePlanDto } from '@application/dto/plan/CreatePlanDto';
import { ICreatePlan } from './interfaces/ICreatePlan';
import { planServicesGlobal } from '@infra/locator/PlanServicesGlobal';
import { IPlanServices } from '@application/services/interfaces/IPlanServices';

export class CreatePlan implements ICreatePlan {
  constructor(
    private readonly planServices: IPlanServices = planServicesGlobal
  ) {}

  public execute = async (planInput: CreatePlanDto): Promise<void> => {
    await this.planServices.createEntity(planInput);
  };
}
