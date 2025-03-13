import { CreateSetDto } from '../dto/set/CreateSetDto';
import { UpdateSetDto } from '../dto/set/updateSetDto';
import { ISetServices } from './interfaces/ISetServices';
import { setRepositoryGlobal } from '@infra/locator/RepositoryGlobal';
import { ISetRepository } from '@domain/repositories/ISetRepository';

export class SetServices implements ISetServices {
  constructor(
    private readonly setRepository: ISetRepository = setRepositoryGlobal
  ) {}

  public createEntity = async (setInput: CreateSetDto): Promise<void> => {
    await this.setRepository.createEntity(setInput);
    return Promise.resolve();
  };

  public updateEntity = async (
    setId: number,
    updateInfo: UpdateSetDto
  ): Promise<void> => {
    await this.setRepository.updateEntity(setId, updateInfo);
    return Promise.resolve();
  };
}
