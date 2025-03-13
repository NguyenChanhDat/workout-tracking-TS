import { CreatePlanDto } from '../dto/plan/CreatePlanDto';
import { UpdatePlanDto } from '../dto/plan/updatePlanDto';
import { IPlanServices } from './interfaces/IPlanServices';
import { planRepositoryGlobal } from '@infra/locator/RepositoryGlobal';
import { IPlanRepository } from '@domain/repositories/IPlanRepository';

export class PlanServices implements IPlanServices {
  constructor(
    private readonly planRepository: IPlanRepository = planRepositoryGlobal
  ) {}

  public createEntity = async (planInput: CreatePlanDto): Promise<void> => {
    await this.planRepository.createEntity(planInput);
    return Promise.resolve();
  };

  public updateEntity = async (
    planId: number,
    updateInfo: UpdatePlanDto
  ): Promise<void> => {
    await this.planRepository.updateEntity(planId, updateInfo);
    return Promise.resolve();
  };
}
