import { User } from '../../../domain/entities/User';
import { IPasswordServices } from '../../services/IPasswordServices';
import { IUserServices } from '../../services/IUserServices';
import { returnUserServicesImplement } from '../../../infra/locator/returnUserServicesImplement';
import { returnPasswordServicesImplement } from '../../../infra/locator/returnPasswordServicesImplement';

export class UpdateUser {
  constructor(
    private readonly userServices: IUserServices = returnUserServicesImplement(),
    private readonly passwordServices: IPasswordServices = returnPasswordServicesImplement()
  ) {}
  private returnPasswordHashed = async (
    passwordInput: string
  ): Promise<string> => {
    return await this.passwordServices.hashPassword(passwordInput);
  };
  public execute = async (inforInput: User): Promise<User> => {
    const userById = await this.userServices.getUserById(inforInput.id);
    if (!userById) {
      throw new Error();
    }
    inforInput.password = await this.returnPasswordHashed(inforInput.password);
    await this.userServices.updateEntity(
      inforInput.id,
      inforInput
    );
    return inforInput;
  };
}
