import { RoleEnum } from '@shared/enums/RoleEnum';
import { MembershipTierEnum } from '../../shared/enums/MembershipTierEnum';

export type User = {
  id: number;
  username: string;
  password: string;
  email?: string;
  dateOfBirth?: Date;
  phoneNumber?: string;
  avaUrl?: string;
  membershipTier: MembershipTierEnum;
  role: RoleEnum;
};
