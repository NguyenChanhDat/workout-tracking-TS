import { User } from '../../../../domain/entities/User';
export interface IGetUser {
  executeById(id: number): Promise<User>;
  executeByUsername(username: string): Promise<User|null>;
  getAll(): Promise<User[] | null>;
}
