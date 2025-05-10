import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PlanModel } from './PlanModel';
import { ExerciseModel } from './ExerciseModel';

@Entity('Sets')
export class SetModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => PlanModel, (plan) => plan.id)
  sessionId!: number;

  @ManyToOne(() => ExerciseModel, (exercise) => exercise.id)
  exerciseId!: number;

  @Column({ type: 'int', nullable: false })
  weight!: number;

  @Column({ type: 'int', nullable: false })
  reps!: number;

  @Column({ type: 'int', nullable: false })
  restTime!: number;
}
