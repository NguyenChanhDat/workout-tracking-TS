import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserModel } from './UserModel';
import { MembershipTierEnum } from '../../../shared/enums/MembershipTierEnum';

@Entity('Plans')
export class PlanModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => UserModel, (user) => user.id)
  userId!: number;

  @Column({ type: 'nvarchar', nullable: false })
  name!: string;

  @Column({ type: 'nvarchar', nullable: false })
  membershipTier!: MembershipTierEnum;
}
