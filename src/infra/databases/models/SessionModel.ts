import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PlanModel } from './PlanModel';

@Entity('Sessions')
export class SessionModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => PlanModel, (plan) => plan.id)
  PlanId!: number;

  @Column({ type: 'date', nullable: false })
  date!: Date;
}
