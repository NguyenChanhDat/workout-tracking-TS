import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ExercisesModel } from './ExercisesModel';
import { SessionsModel } from './SessionsModel';

@Index('PK__Sets__3213E83FA1BEEF18', ['id'], { unique: true })
@Index('UQ__Sets__3213E83E5BB7A682', ['id'], { unique: true })
@Entity('Sets', { schema: 'dbo' })
export class SetsModel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id!: number;

  @Column('int', { name: 'weight' })
  weight!: number;

  @Column('int', { name: 'reps' })
  reps!: number;

  @Column('int', { name: 'restTime' })
  restTime!: number;

  @Column({ type: 'int', nullable: false })
  exerciseId!: number;

  @ManyToOne(() => ExercisesModel, (exercises) => exercises.sets)
  @JoinColumn([{ name: 'exerciseId', referencedColumnName: 'id' }])
  exercise!: ExercisesModel;

  @Column({ type: 'int', nullable: false })
  sessionId!: number;

  @ManyToOne(() => SessionsModel, (sessions) => sessions.sets)
  @JoinColumn([{ name: 'sessionId', referencedColumnName: 'id' }])
  session!: SessionsModel;
}
