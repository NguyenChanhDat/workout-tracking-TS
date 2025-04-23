import { Set } from '../../../../domain/entities/Set';

export interface IUpdateSet {
  execute(setInfo: Set): Promise<Set>;
}
