import { CreateBodyTrackTable } from './CreateBodyTrackTable';
import { CreateExerciseTable } from './CreateExerciseTable';
import { CreatePlanTable } from './CreatePlanTable';
import { CreateSetTable } from './CreateSetTable';
import { CreateUserTable } from './CreateUserTable';

export const CreateTableQueryList = [
  CreateUserTable(),
  CreateBodyTrackTable(),
  CreatePlanTable(),
  CreateExerciseTable(),
  CreateSetTable(),
];
