import { ILogin } from '@application/use-cases/user/interface/ILogin';
import {
  CreateUser,
  DeleteUser,
  GetUser,
  ICreateUser,
  IDeleteUser,
  IGetUser,
  IUpdateUser,
  UpdateUser,
  LoginUseCase,
} from '../../../application/use-cases/user/UserUseCaseExportDir';

export const getUserGlobal: IGetUser = new GetUser();
export const createUserGlobal: ICreateUser = new CreateUser();
export const deleteUserGlobal: IDeleteUser = new DeleteUser();
export const updateUserGlobal: IUpdateUser = new UpdateUser();
export const loginUseCase: ILogin = new LoginUseCase();
