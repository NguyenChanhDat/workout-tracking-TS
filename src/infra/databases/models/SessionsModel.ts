import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PlansModel } from './PlansModel';
import { SetsModel } from './SetsModel';

@Index('PK__Sessions__A83AAAEC1A941C18', ['id', 'planId'], { unique: true })
@Index('UQ__Sessions__3213E83E72066557', ['id'], { unique: true })
@Entity('Sessions', { schema: 'dbo' })
export class SessionsModel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id!: number;

  @Column('date', { name: 'date', nullable: false })
  date!: Date;

  @Column({ type: 'int', nullable: false })
  planId!: number;

  @ManyToOne(() => PlansModel, (plans) => plans.sessions)
  @JoinColumn([{ name: 'planId', referencedColumnName: 'id' }])
  plan!: PlansModel;

  @OneToMany(() => SetsModel, (sets) => sets.session)
  sets!: SetsModel[];
}
