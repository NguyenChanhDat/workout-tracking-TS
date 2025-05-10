import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { PlanModel } from './PlanModel';
import { Plan } from '@domain/entities/Plan';
import { SetModel } from './SetModel';
import { Set } from '@domain/entities/Set';

@Entity('Sessions')
export class SessionModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => PlanModel, (plan) => plan.id)
  planId!: number;

  @Column({ type: 'date', nullable: false })
  date!: Date;

  // Relationships
  @ManyToOne(() => PlanModel, (plan) => plan.id)
  plan!: Plan[];

  @OneToMany(() => SetModel, (set) => set.sessionId)
  set!: Set[];
}
