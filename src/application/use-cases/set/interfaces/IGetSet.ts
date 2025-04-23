import { Set } from '../../../../domain/entities/Set';

export interface IGetSet {
  getAll(): Promise<Set[] | null>;
  getById(id: number): Promise<Set | null>;
}
