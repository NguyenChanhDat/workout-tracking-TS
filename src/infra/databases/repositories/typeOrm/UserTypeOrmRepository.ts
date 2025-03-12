import { IUserRepository } from '../../../../domain/repositories/IUserRepository';
import { User } from '../../../../domain/entities/User';
import { UpdateUserDto } from '../../../../application/dto/user/updateUserDto';
import { UserModel } from '@infra/databases/models/UserModel';
import { appDataSource } from '@infra/databases/dataSource/BootstrapTypeOrm';

export class UserTypeOrmRepository implements IUserRepository {
  async createEntity(user: User): Promise<void> {
    await appDataSource.getRepository(UserModel).save(user);
  }

  async updateEntity(userId: number, inforInput: UpdateUserDto): Promise<void> {
    await appDataSource.getRepository(UserModel).update(userId, inforInput);
  }

  async deleteEntity(userId: number): Promise<void> {
    await appDataSource.getRepository(UserModel).delete(userId);
    return;
  }

  async getEntityById(userId: number): Promise<User | null> {
    const user = await appDataSource
      .getRepository(UserModel)
      .findOne({ where: { id: userId } });
    return user;
  }

  async showListEntity(): Promise<User[] | null> {
    return await appDataSource.getRepository(UserModel).find();
  }

  async getByUsername(username: string): Promise<User | null> {
    const user = await appDataSource
      .getRepository(UserModel)
      .findOne({ where: { username } });
    return user;
  }
}
