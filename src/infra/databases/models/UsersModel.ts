import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BodyTracksModel } from './BodyTracksModel';
import { PlansModel } from './PlansModel';
import { MembershipTierEnum } from '@shared/enums/MembershipTierEnum';

@Index('PK__Users__3213E83F329786CD', ['id'], { unique: true })
@Index('UQ__Users__3213E83E4C87412E', ['id'], { unique: true })
@Entity('Users', { schema: 'dbo' })
export class UsersModel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id!: number;

  @Column('nvarchar', { name: 'username' })
  username!: string;

  @Column('nvarchar', { name: 'password' })
  password!: string;

  @Column('nvarchar', { name: 'membershipTier', default: () => "'Basic'" })
  membershipTier!: MembershipTierEnum;

  @OneToMany(() => BodyTracksModel, (bodyTracks) => bodyTracks.user)
  bodyTracks!: BodyTracksModel[];

  @OneToMany(() => PlansModel, (plans) => plans.user)
  plans!: PlansModel[];
}
