import { Set } from '../../../domain/entities/Set';

export type CreateSetDto = Omit<Set, 'id'>;
