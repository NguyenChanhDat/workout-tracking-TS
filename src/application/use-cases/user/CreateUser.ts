import { User } from '../../../domain/entities/User';
import { CreateUserDto } from '../../dto/user/createUserDto';
import { ICreateUser } from './interface/ICreateUser';
import { IPasswordServices } from '../../services/IPasswordServices';
import { IUserServices } from '../../services/IUserServices';

export class CreateUser implements ICreateUser {
  constructor(
    private userServices: IUserServices,
    private passwordServices: IPasswordServices
  ) {}
  private returnPasswordHashed = async (
    passwordInput: string
  ): Promise<string> => {
    return await this.passwordServices.hashPassword(passwordInput);
  };
  public execute = async (inputInfor: CreateUserDto): Promise<User> => {
    inputInfor.password = await this.returnPasswordHashed(inputInfor.password);
    const userCreated: User = await this.userServices.createEntity(inputInfor);
    return userCreated;
  };
}
