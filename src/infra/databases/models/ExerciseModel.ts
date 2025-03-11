import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { MuscleEnum } from '../../../shared/enums/MuscleEnum';

@Entity('Exercises')
export class ExerciseModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'nvarchar', nullable: false })
  name!: string;

  @Column({ type: 'nvarchar', nullable: true })
  imageUrl?: string;

  @Column({ type: 'nvarchar', nullable: true })
  targetMuscle1?: MuscleEnum;

  @Column({ type: 'nvarchar', nullable: true })
  targetMuscle2?: MuscleEnum;

  @Column({ type: 'nvarchar', nullable: true })
  targetMuscle3?: MuscleEnum;
}
