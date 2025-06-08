import { CreateUserDto } from '../../../../application/dto/user/createUserDto';
import { User } from '../../../../domain/entities/User';
import { UserApiStatus } from '../../../../shared/constant/ApiStatus';
import { IUserController } from './IUserControllers';
import { Response, Request } from 'express';
import { UserNotFoundError } from '../../../../shared/constant/UserNotFoundError';
import {
  ICreateUser,
  IDeleteUser,
  IGetUser,
  IUpdateUser,
} from '../../../../application/use-cases/user/UserUseCaseExportDir';
import {
  createUserGlobal,
  deleteUserGlobal,
  getUserGlobal,
  loginUseCase,
  updateUserGlobal,
} from '../../../../infra/locator/use-cases/UserUseCaseGlobal';
import { LoginDto } from '@application/dto/user/loginDto';

export class UserController implements IUserController {
  constructor(
    private readonly createUser: ICreateUser = createUserGlobal,
    private readonly deleteUser: IDeleteUser = deleteUserGlobal,
    private readonly getUser: IGetUser = getUserGlobal,
    private readonly updateUser: IUpdateUser = updateUserGlobal
  ) {}
  public create = async (req: Request, res: Response): Promise<void> => {
    try {
      const userInputInfor: CreateUserDto = req.body;
      const userCreated = await this.createUser.execute(userInputInfor);
      res.status(UserApiStatus.OK.status);
      res.send(userCreated);
    } catch (error) {
      console.log(error);
      res.status(UserApiStatus.INTERNAL_SERVER_ERROR.status);
      res.send(UserApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  };
  public update = async (req: Request, res: Response): Promise<void> => {
    try {
      const userInfor: User = req.body;
      const userUpdated: User = await this.updateUser.execute(userInfor);
      res.status(UserApiStatus.OK.status);
      res.send(UserApiStatus.OK + ' ' + userUpdated);
    } catch (error) {
      console.log(error);

      if (error instanceof UserNotFoundError) {
        res.status(error.status);
        res.send(error.message);
        return;
      }
      res.status(UserApiStatus.INTERNAL_SERVER_ERROR.status);
      res.send(UserApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  };
  public delete = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      await this.deleteUser.executeById(id);
      res.status(UserApiStatus.OK.status);
      res.send(UserApiStatus.OK);
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        res.status(error.status);
        res.send(error.message);
        return;
      }
      res.status(UserApiStatus.INTERNAL_SERVER_ERROR.status);
      res.send(UserApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  };
  public get = async (req: Request, res: Response): Promise<void> => {
    try {
      const userByInput: User | User[] | null =
        'id' in req.query
          ? await this.getUser.executeById(Number(req.query.id))
          : 'username' in req.query
          ? await this.getUser.executeByUsername(String(req.query.username))
          : await this.getUser.getAll();
      res.status(UserApiStatus.OK.status);
      res.send(userByInput);
    } catch (error) {
      console.log(error);

      if (error instanceof UserNotFoundError) {
        res.status(error.status);
        res.send(error.message);
        return;
      }
      res.status(UserApiStatus.INTERNAL_SERVER_ERROR.status);
      res.send(UserApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  };

  public login = async (req: Request, res: Response): Promise<void> => {
    try {
      const inputLogin: LoginDto = req.body;
      const token = await loginUseCase.returnToken(inputLogin);
      if (!token) {
        res.status(UserApiStatus.UNPROCESSABLE_ENTITY.status);
        res.send(UserApiStatus.UNPROCESSABLE_ENTITY);
        return;
      }
      res.status(UserApiStatus.OK.status);
      res.send(JSON.stringify(token));
    } catch (error) {
      res.status(UserApiStatus.UNPROCESSABLE_ENTITY.status);
      res.send(UserApiStatus.UNPROCESSABLE_ENTITY);
    }
  };
}
