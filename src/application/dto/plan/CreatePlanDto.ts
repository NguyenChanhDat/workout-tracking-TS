import { Plan } from '../../../domain/entities/Plan';

export type CreatePlanDto = Omit<Plan, 'id'>;
