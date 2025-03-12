import { CreateSetDto } from '../../dto/set/CreateSetDto';

export interface ISetServices {
  createEntity(set: CreateSetDto): Promise<void>;
}
