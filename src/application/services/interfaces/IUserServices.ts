import { CreateUserDto } from '../../dto/user/createUserDto';
import { UpdateUserDto } from '../../dto/user/updateUserDto';
import { User } from '../../../domain/entities/User';

export interface IUserServices {
  createEntity(user: CreateUserDto): Promise<void>;
  updateEntity(userId: number, updateInfo: UpdateUserDto): Promise<void>;
  deleteEntity(userId: number): Promise<void>;
  getUserById(userId: number): Promise<User | null>;
  getUserByUsername(username: string): Promise<User | null>;
  showListEntity(): Promise<User[] | null>;
}
