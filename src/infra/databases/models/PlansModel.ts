import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UsersModel } from './UsersModel';
import { SessionsModel } from './SessionsModel';
import { MembershipTierEnum } from '@shared/enums/MembershipTierEnum';

@Index('PK__Plans__3213E83F9907C852', ['id'], { unique: true })
@Index('UQ__Plans__3213E83E887D8306', ['id'], { unique: true })
@Entity('Plans', { schema: 'dbo' })
export class PlansModel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id!: number;

  @Column('nvarchar', { name: 'name' })
  name!: string;

  @Column('nvarchar', { name: 'membershipTier' })
  membershipTier!: MembershipTierEnum;

  @Column({ type: 'int', nullable: false })
  userId!: number;

  @ManyToOne(() => UsersModel, (users) => users.plans)
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
  user!: UsersModel;

  @OneToMany(() => SessionsModel, (sessions) => sessions.plan)
  sessions!: SessionsModel[];

  @Column('nvarchar', { name: 'description', nullable: true })
  description?: string;
}
