import { IPasswordServices } from '../../services/IPasswordServices';
import { ILogin } from './interface/ILogin';
import { IUserServices } from '../../services/interfaces/IUserServices';
import { userServicesGlobal } from '@infra/locator/services/UserServicesGlobal';
import { passwordServicesGlobal } from '@infra/locator/services/PasswordServicesGlobal';
import { ITokenServices } from '@application/services/interfaces/ITokenServices';
import { tokenServicesGlobal } from '@infra/locator/repository/TokenRepositoryGlobal';

export class LoginUseCase implements ILogin {
  constructor(
    private readonly userServices: IUserServices = userServicesGlobal,
    private readonly passwordServices: IPasswordServices = passwordServicesGlobal,
    private readonly tokenServices: ITokenServices = tokenServicesGlobal
  ) {}

  private getUserPasswordByUsername = async (
    username: string
  ): Promise<string> => {
    const userByUsername = await this.userServices.getUserByUsername(username);
    return userByUsername?.password || '';
  };

  public returnToken = async (input: {
    username: string;
    password: string;
  }): Promise<string | undefined> => {
    const { username, password } = input;
    const userPasswordHashed = await this.getUserPasswordByUsername(username);
    if (!userPasswordHashed) {
      return;
    }

    const verifiedUser = await this.passwordServices.validatePassword(
      password,
      userPasswordHashed
    );
    if (verifiedUser) {
      const token = await this.tokenServices.generateToken({
        username,
        password,
      });
      if (token) {
        return token;
      }
    }
  };
}
