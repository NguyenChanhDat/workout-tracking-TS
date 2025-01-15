import { IDeleteUser } from './interface/IDeleteUser';
import { IUserServices } from '../../services/IUserServices';
import { returnUserServicesImplement } from '../../../infra/locator/returnUserServicesImplement';

export class DeleteUser implements IDeleteUser {
  constructor(
    private userServices: IUserServices = returnUserServicesImplement()
  ) {}

  public executeById = async (userId: number): Promise<number> => {
    const userById = await this.userServices.getUserById(userId);
    if (!userById) {
      throw new Error();
    }
    await this.userServices.deleteEntity(userId);
    return userId;
  };
}
