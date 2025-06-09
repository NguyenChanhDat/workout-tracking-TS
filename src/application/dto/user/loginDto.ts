import { User } from '../../../domain/entities/User';

export type LoginDto = Omit<User, 'id' | 'membershipTier'>;
export type LoginResponseDto =
  | (Omit<User, 'password'> & {
      token: string;
    })
  | undefined;
