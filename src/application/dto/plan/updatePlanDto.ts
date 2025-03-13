import { Plan } from '../../../domain/entities/Plan';

export type UpdatePlanDto = Omit<Plan, 'userId'>;
