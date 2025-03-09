import { passwordHashGlobal } from '../../infra/locator/PasswordHashGlobal';
import { IPasswordHash } from '../interfaces/IPasswordHash';
import { IPasswordServices } from './IPasswordServices';

export class PasswordServices implements IPasswordServices {
  constructor(private passwordHash: IPasswordHash = passwordHashGlobal) {}
  public hashPassword = async (inputPassword: string): Promise<string> => {
    try {
      return await this.passwordHash.hashPassword(inputPassword);
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
  public validatePassword = async (
    inputPassword: string,
    hashedPassword: string
  ): Promise<boolean> => {
    try {
      return await this.passwordHash.comparePassword(
        inputPassword,
        hashedPassword
      );
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
}
