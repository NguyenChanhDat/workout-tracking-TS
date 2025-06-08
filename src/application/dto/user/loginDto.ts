import { User } from '../../../domain/entities/User';

export type LoginDto = Omit<User, 'id' | 'membershipTier'>;
