import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { UserModel } from './UserModel';
import { MembershipTierEnum } from '../../../shared/enums/MembershipTierEnum';
import { SessionModel } from './SessionModel';
import { Session } from '@domain/entities/Session';

@Entity('Plans')
export class PlanModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'int', nullable: false })
  userId!: number;

  @Column({ type: 'nvarchar', nullable: false })
  name!: string;

  @Column({ type: 'nvarchar', nullable: false })
  membershipTier!: MembershipTierEnum;

  // Relationships
  @ManyToOne(() => UserModel, (user) => user.id)
  user!: number[];

  @OneToMany(() => SessionModel, (session) => session.planId)
  session!: Session[];
}
