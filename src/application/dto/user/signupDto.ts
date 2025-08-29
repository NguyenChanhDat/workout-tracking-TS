import { User } from '@domain/entities/User';

export type SignupDto = Omit<User, 'id' | 'membershipTier'>;
