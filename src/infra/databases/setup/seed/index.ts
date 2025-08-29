import { InsertBodyTrackData } from './InsertBodyTrackData';
import { InsertExerciseData } from './InsertExerciseData';
import { InsertPlanData } from './InsertPlanData';
import { InsertSessionData } from './insertSessionData';
import { InsertSetData } from './InsertSetData';
import { InsertUserData } from './InsertUserData';

export const InsertDataQueryList = [
  InsertUserData(),
  InsertBodyTrackData(),
  InsertPlanData(),
  InsertExerciseData(),
  InsertSessionData(),
  InsertSetData(),
];
