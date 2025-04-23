import { User } from '../../../domain/entities/User';

export type UpdateUserDto = Omit<User, 'id'>;
