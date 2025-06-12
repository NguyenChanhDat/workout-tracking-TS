import { MembershipTierEnum } from '../../shared/enums/MembershipTierEnum';

export type Plan = {
  id: number;
  userId: number;
  name: string;
  membershipTier: MembershipTierEnum;
  description?: string;
};
