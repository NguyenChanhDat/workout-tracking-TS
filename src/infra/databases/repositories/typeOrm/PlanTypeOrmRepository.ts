import { IPlanRepository } from '../../../../domain/repositories/IPlanRepository';
import { Plan } from '../../../../domain/entities/Plan';
import { PlansModel } from '@infra/databases/models/PlansModel';
import { appDataSource } from '@infra/databases/dataSource/BootstrapTypeOrm';
import { Repository } from 'typeorm';
import { UpdatePlanDto } from '@application/dto/plan/UpdatePlanDto';

export class PlanTypeOrmRepository implements IPlanRepository {
  constructor(
    private readonly repository: Repository<Plan> = appDataSource.getRepository(
      PlansModel
    )
  ) {}

  async createEntity(plan: Plan): Promise<void> {
    await this.repository.save(plan);
  }

  async updateEntity(planId: number, plan: Plan): Promise<void> {
    const { id, ...rest } = plan;
    const updateInfor: Omit<UpdatePlanDto, 'id'> = rest;
    await this.repository.update(planId, updateInfor);
  }

  async deleteEntity(planId: number): Promise<void> {
    await this.repository.delete(planId);
  }

  async getEntityById(planId: number): Promise<Plan | null> {
    const plan = await this.repository.findOne({ where: { id: planId } });
    return plan;
  }

  async showListEntity(): Promise<Plan[] | null> {
    return await this.repository.find();
  }

  async getByUserId(userId: number): Promise<Plan[] | null> {
    return await this.repository.find({ where: { userId } });
  }
}
