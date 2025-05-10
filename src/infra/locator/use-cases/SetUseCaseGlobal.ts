import {
  CreateSet,
  DeleteSet,
  GetSet,
  UpdateSet,
} from '../../../application/use-cases/set/SetUseCaseExportDir';
import { ICreateSet } from '../../../application/use-cases/set/interfaces/ICreateSet';
import { IDeleteSet } from '../../../application/use-cases/set/interfaces/IDeleteSet';
import { IGetSet } from '../../../application/use-cases/set/interfaces/IGetSet';
import { IUpdateSet } from '../../../application/use-cases/set/interfaces/IUpdateSet';

export const createSeUseCasetGlobal: ICreateSet = new CreateSet();
export const deleteSeUseCasetGlobal: IDeleteSet = new DeleteSet();
export const getSeUseCasetGlobal: IGetSet = new GetSet();
export const updateSeUseCasetGlobal: IUpdateSet = new UpdateSet();
