import { User } from '../../../domain/entities/User';

export type LoginDto = Pick<User, 'username' | 'password'>;
export type LoginResponseDto =
  | (Omit<User, 'password'> & {
      token: string;
    })
  | undefined;
