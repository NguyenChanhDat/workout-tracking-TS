import { CreateSetDto } from '@application/dto/set/CreateSetDto';
import { SetServices } from '../../services/SetServices';
import { ICreateSet } from './interfaces/ICreateSet';

export class CreateSet implements ICreateSet {
  constructor(private readonly setServices: SetServices) {}

  public execute = async (setInput: CreateSetDto): Promise<void> => {
    await this.setServices.createEntity(setInput);
  };
}
