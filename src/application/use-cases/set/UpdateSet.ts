import { SetServices } from '../../services/SetServices';
import { UpdateSetDto } from '../../dto/set/UpdateSetDto';
import { IUpdateSet } from './interfaces/IUpdateSet';

export class UpdateSet implements IUpdateSet {
  constructor(private readonly setServices: SetServices) {}

  public execute = async (
    setId: number,
    updateInfo: UpdateSetDto
  ): Promise<void> => {
    await this.setServices.updateEntity(setId, updateInfo);
  };
}
