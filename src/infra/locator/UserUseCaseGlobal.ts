import {
  CreateUser,
  DeleteUser,
  GetUser,
  ICreateUser,
  IDeleteUser,
  IGetUser,
  IUpdateUser,
  UpdateUser,
} from '../../application/use-cases/user/UserUseCaseExportDir';

export const GetUserGlobal: IGetUser = new GetUser();
export const CreateUserGlobal: ICreateUser = new CreateUser();
export const DeleteUserGlobal: IDeleteUser = new DeleteUser();
export const UpdateUserGlobal: IUpdateUser = new UpdateUser();
