import { User } from '../../../domain/entities/User';
import { CreateUserDto } from '../../dto/user/createUserDto';
import { ICreateUser } from './interface/ICreateUser';
import { IPasswordServices } from '../../services/IPasswordServices';
import { IUserServices } from '../../services/IUserServices';
import { returnUserServicesImplement } from '../../../infra/locator/returnUserServicesImplement';
import { returnPasswordServicesImplement } from '../../../infra/locator/returnPasswordServicesImplement';

export class CreateUser implements ICreateUser {
  constructor(
    private userServices: IUserServices = returnUserServicesImplement(),
    private passwordServices: IPasswordServices = returnPasswordServicesImplement()
  ) {}
  private returnPasswordHashed = async (
    passwordInput: string
  ): Promise<string> => {
    return await this.passwordServices.hashPassword(passwordInput);
  };
  public execute = async (
    inputInfor: CreateUserDto
  ): Promise<Omit<User, 'id'>> => {
    inputInfor.password = await this.returnPasswordHashed(inputInfor.password);
    await this.userServices.createEntity(inputInfor);
    return inputInfor;
  };
}
