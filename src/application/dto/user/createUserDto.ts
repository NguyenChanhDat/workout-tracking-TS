import { User } from '@domain/entities/User';

export type CreateUserDto = Omit<User, 'id'>;
