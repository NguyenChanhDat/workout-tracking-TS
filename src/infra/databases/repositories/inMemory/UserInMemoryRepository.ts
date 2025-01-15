import { IUserRepository } from '../../../../domain/repositories/IUserRepository';
import { User } from '../../../../domain/entities/User';
import { UpdateUserDto } from '@application/dto/user/updateUserDto';

export class UserInMemoryRepository implements IUserRepository {
  private users: User[] = [];
  private userIdCounter = 1;

  async createEntity(user: User): Promise<void> {
    const newUser: User = {
      id: this.userIdCounter++,
      username: user.username,
      password: user.password,
    };
    this.users.push(newUser);
    Promise.resolve();
  }

  async updateEntity(userId: number, inforInput: UpdateUserDto): Promise<void> {
    this.users[userId] = {
      ...inforInput,
    };
    Promise.resolve();
  }

  async deleteEntity(userId: number): Promise<void> {
    this.users.splice(userId, 1);
    return Promise.resolve();
  }

  async getEntityById(userId: number): Promise<User | null> {
    const user = this.users.find((user) => user.id === userId);
    if (!user) {
      return null;
    }
    return Promise.resolve(user);
  }

  async showListEntity(): Promise<User[] | null> {
    return Promise.resolve(this.users);
  }

  async getByUsername(username: string): Promise<User | null> {
    const user = this.users.find((user) => user.username === username);
    if (!user) {
      return Promise.resolve(null);
    }
    return Promise.resolve(user);
  }
}
