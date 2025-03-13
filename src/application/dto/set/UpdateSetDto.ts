import { Set } from '../../../domain/entities/Set';

export type UpdateSetDto = Omit<Set, 'PlanId' | 'exerciseId'>;
