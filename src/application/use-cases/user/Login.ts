import { IPasswordServices } from '../../services/IPasswordServices';
import { ILogin } from './interface/ILogin';
import { IUserServices } from '../../services/interfaces/IUserServices';
import { userServicesGlobal } from '@infra/locator/services/UserServicesGlobal';
import { passwordServicesGlobal } from '@infra/locator/services/PasswordServicesGlobal';
import { ITokenServices } from '@application/services/interfaces/ITokenServices';
import { tokenServicesGlobal } from '@infra/locator/repository/TokenRepositoryGlobal';
import { LoginResponseDto } from '@application/dto/user/loginDto';

export class LoginUseCase implements ILogin {
  constructor(
    private readonly userServices: IUserServices = userServicesGlobal,
    private readonly passwordServices: IPasswordServices = passwordServicesGlobal,
    private readonly tokenServices: ITokenServices = tokenServicesGlobal
  ) {}
  public returnResult = async (input: {
    username: string;
    password: string;
  }): Promise<LoginResponseDto> => {
    const { username, password } = input;
    const userByUsername = await this.userServices.getUserByUsername(username);
    if (!userByUsername) {
      return;
    }

    const verifiedUser = await this.passwordServices.validatePassword(
      password,
      userByUsername?.password || ''
    );

    if (verifiedUser) {
      const token = await this.tokenServices.generateToken({
        username,
        password,
      });
      if (token) {
        const { password, ...rest } = userByUsername;
        const result: LoginResponseDto = {
          ...rest,
          token,
        };
        return result;
      }
    }
  };
}
