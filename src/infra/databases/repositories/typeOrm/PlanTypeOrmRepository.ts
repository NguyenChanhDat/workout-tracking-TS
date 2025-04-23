import { IPlanRepository } from '../../../../domain/repositories/IPlanRepository';
import { Plan } from '../../../../domain/entities/Plan';
import { PlanModel } from '@infra/databases/models/PlanModel';
import { appDataSource } from '@infra/databases/dataSource/BootstrapTypeOrm';

export class PlanTypeOrmRepository implements IPlanRepository {
  async createEntity(plan: Plan): Promise<void> {
    await appDataSource.getRepository(PlanModel).save(plan);
  }

  async updateEntity(planId: number, plan: Partial<Plan>): Promise<void> {
    await appDataSource.getRepository(PlanModel).update(planId, plan);
  }

  async deleteEntity(planId: number): Promise<void> {
    await appDataSource.getRepository(PlanModel).delete(planId);
  }

  async getEntityById(planId: number): Promise<Plan | null> {
    const plan = await appDataSource
      .getRepository(PlanModel)
      .findOne({ where: { id: planId } });
    return plan;
  }

  async showListEntity(): Promise<Plan[] | null> {
    return await appDataSource.getRepository(PlanModel).find();
  }

  async getByUserId(userId: number): Promise<Plan[] | null> {
    return await appDataSource
      .getRepository(PlanModel)
      .find({ where: { userId } });
  }
}
