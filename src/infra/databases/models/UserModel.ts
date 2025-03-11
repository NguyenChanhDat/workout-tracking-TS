import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { MembershipTierEnum } from '../../../shared/enums/MembershipTierEnum';

@Entity('Users')
export class UserModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'nvarchar', nullable: false })
  username!: string;

  @Column({ type: 'nvarchar', nullable: false })
  password!: string;

  @Column({ type: 'nvarchar', default: MembershipTierEnum.BASIC })
  membershipTier!: MembershipTierEnum;
}
