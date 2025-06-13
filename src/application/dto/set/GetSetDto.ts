import { MuscleEnum } from '@shared/enums/MuscleEnum';

export type GetByDateUserIdResponse = {
  id: number; // setId
  weight: number;
  reps: number;
  restTime: number;
  name: string;
  imageUrl?: string;
  targetMuscle1?: MuscleEnum;
  targetMuscle2?: MuscleEnum;
  targetMuscle3?: MuscleEnum;
}[];

export type GetAllByUserIdResponseDto = {
  id: number; // setId
  exerciseId: number;
  date: Date;
  name: string;
  weight: number;
  reps: number;
}[];
