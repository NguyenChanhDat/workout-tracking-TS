import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SetsModel } from './SetsModel';
import { MuscleEnum } from '@shared/enums/MuscleEnum';

@Index('PK__Exercise__3213E83F3414E59C', ['id'], { unique: true })
@Index('UQ__Exercise__3213E83ED9583764', ['id'], { unique: true })
@Entity('Exercises', { schema: 'dbo' })
export class ExercisesModel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id!: number;

  @Column('nvarchar', { name: 'name' })
  name!: string;

  @Column('nvarchar', { name: 'imageUrl', nullable: true })
  imageUrl?: string;

  @Column('nvarchar', { name: 'description', nullable: true })
  description?: string;

  @Column('nvarchar', { name: 'targetMuscle1', nullable: true })
  targetMuscle1?: MuscleEnum;

  @Column('nvarchar', { name: 'targetMuscle2', nullable: true })
  targetMuscle2?: MuscleEnum;

  @Column('nvarchar', { name: 'targetMuscle3', nullable: true })
  targetMuscle3?: MuscleEnum;

  @OneToMany(() => SetsModel, (sets) => sets.exercise)
  sets!: SetsModel[];
}
