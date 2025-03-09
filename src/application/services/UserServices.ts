import { CreateUserDto } from '../dto/user/createUserDto';
import { UpdateUserDto } from '../dto/user/updateUserDto';
import { IUserServices } from './IUserServices';
import { User } from '../../domain/entities/User';
import { userRepositoryGlobal } from '../../infra/locator/UserRepositoryGlobal';
import { IUserRepository } from '../../domain/repositories/IUserRepository';

export class UserServices implements IUserServices {
  constructor(private readonly userRepository:IUserRepository = userRepositoryGlobal) {}

  public createEntity = async (userInput: CreateUserDto): Promise<void> => {
    this.userRepository.createEntity(userInput);
    return Promise.resolve();
  };

  public updateEntity = async (
    userId: number,
    updateInfo: UpdateUserDto
  ): Promise<void> => {
    await this.userRepository.updateEntity(userId, updateInfo);
    return Promise.resolve();
  };

  public deleteEntity = async (userId: number): Promise<void> => {
    await this.userRepository.deleteEntity(userId);
    return Promise.resolve();
  };

  public getUserById = async (userId: number): Promise<User | null> => {
    const userById: User | null = await this.userRepository.getEntityById(
      userId
    );
    return userById;
  };
  public getUserByUsername(username: string): Promise<User | null> {
    const userByUsername: Promise<User | null> =
      this.userRepository.getByUsername(username);
    return userByUsername;
  }

  public showListEntity = async (): Promise<User[] | null> => {
    const userList: User[] | null = await this.userRepository.showListEntity();
    return userList;
  };
}
