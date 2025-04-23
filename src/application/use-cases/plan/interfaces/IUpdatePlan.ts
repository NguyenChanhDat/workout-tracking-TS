import { Plan } from '../../../../domain/entities/Plan';

export interface IUpdatePlan {
  execute(planInfo: Plan): Promise<Plan>;
}
