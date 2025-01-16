import { InsertBodyTrackData } from './InsertBodyTrackData';
import { InsertExerciseData } from './InsertExerciseData';
import { InsertPlanData } from './InsertPlanData';
import { InsertSetData } from './InsertSetData';
import { InsertUserData } from './InsertUserData';

export const InsertDataQueryList = [
  InsertUserData(),
  InsertBodyTrackData(),
  InsertPlanData(),
  InsertExerciseData(),
  InsertSetData(),
];
