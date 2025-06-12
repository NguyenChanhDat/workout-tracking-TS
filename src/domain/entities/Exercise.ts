import { MuscleEnum } from '../../shared/enums/MuscleEnum';

export type Exercise = {
  id: number;
  name: string;
  imageUrl?: string;
  targetMuscle1?: MuscleEnum;
  targetMuscle2?: MuscleEnum;
  targetMuscle3?: MuscleEnum;
  description?: string;
};
