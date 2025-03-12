import { User } from '@domain/entities/User';
import { CreateUserDto } from '../../dto/user/createUserDto';
import { ICreateUser } from './interface/ICreateUser';
import { IUserServices } from '../../services/IUserServices';
import { userServicesGlobal } from '@infra/locator/UserServicesGlobal';
import { IPasswordServices } from '@application/services/IPasswordServices';
import { passwordServicesGlobal } from '@infra/locator/PasswordServicesGlobal';
import { MembershipTierEnum } from '@shared/enums/MembershipTierEnum';

export class CreateUser implements ICreateUser {
  constructor(
    private readonly userServices: IUserServices = userServicesGlobal,
    private passwordServices: IPasswordServices = passwordServicesGlobal
  ) {}
  private returnPasswordHashed = async (
    passwordInput: string
  ): Promise<string> => {
    return await this.passwordServices.hashPassword(passwordInput);
  };
  public execute = async (
    inputInfor: CreateUserDto
  ): Promise<Omit<User, 'id'>> => {
    const userToBeCreate: CreateUserDto = {
      username: inputInfor.username,
      password: inputInfor.password,
      membershipTier: MembershipTierEnum.BASIC,
    };
    userToBeCreate.password = await this.returnPasswordHashed(
      inputInfor.password
    );

    await this.userServices.createEntity(inputInfor);
    return inputInfor;
  };
}
