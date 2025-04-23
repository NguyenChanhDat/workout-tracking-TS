// import { CreateExerciseDto } from '../../../../application/dto/exercise/CreateExerciseDto';
// import { Exercise } from '../../../../domain/entities/Exercise';
// import { ExerciseApiStatus } from '../../../../shared/constant/ApiStatus';
// import { IExerciseController } from './IExerciseController';
// import { Response, Request } from 'express';
// import {
//   ICreateExercise,
//   IDeleteExercise,
//   IGetExercise,
//   IUpdateExercise,
// } from '../../../../application/use-cases/exercise/interfaces';
// import {
//   createExerciseGlobal,
//   deleteExerciseGlobal,
//   getExerciseGlobal,
//   updateExerciseGlobal,
// } from '../../../../infra/locator/ExerciseUseCaseGlobal';

// export class ExerciseController implements IExerciseController {
//   constructor(
//     private readonly createExercise: ICreateExercise = createExerciseGlobal,
//     private readonly deleteExercise: IDeleteExercise = deleteExerciseGlobal,
//     private readonly getExercise: IGetExercise = getExerciseGlobal,
//     private readonly updateExercise: IUpdateExercise = updateExerciseGlobal
//   ) {}

//   public create = async (req: Request, res: Response): Promise<void> => {
//     try {
//       const exerciseInput: CreateExerciseDto = req.body;
//       await this.createExercise.execute(exerciseInput);
//       res
//         .status(ExerciseApiStatus.OK.status)
//         .send(ExerciseApiStatus.OK.message);
//     } catch (error) {
//       console.error(error);
//       res
//         .status(ExerciseApiStatus.INTERNAL_SERVER_ERROR.status)
//         .send(ExerciseApiStatus.INTERNAL_SERVER_ERROR.message);
//     }
//   };

//   public update = async (req: Request, res: Response): Promise<void> => {
//     try {
//       const exerciseInfo: Exercise = req.body;
//       await this.updateExercise.execute(exerciseInfo.id, exerciseInfo);
//       res
//         .status(ExerciseApiStatus.OK.status)
//         .send(ExerciseApiStatus.OK.message);
//     } catch (error) {
//       console.error(error);
//       res
//         .status(ExerciseApiStatus.INTERNAL_SERVER_ERROR.status)
//         .send(ExerciseApiStatus.INTERNAL_SERVER_ERROR.message);
//     }
//   };

//   public delete = async (req: Request, res: Response): Promise<void> => {
//     try {
//       const id = Number(req.params.id);
//       await this.deleteExercise.executeById(id);
//       res
//         .status(ExerciseApiStatus.OK.status)
//         .send(ExerciseApiStatus.OK.message);
//     } catch (error) {
//       console.error(error);
//       res
//         .status(ExerciseApiStatus.INTERNAL_SERVER_ERROR.status)
//         .send(ExerciseApiStatus.INTERNAL_SERVER_ERROR.message);
//     }
//   };

//   public get = async (req: Request, res: Response): Promise<void> => {
//     try {
//       const exerciseList = await this.getExercise.getAll();
//       res.status(ExerciseApiStatus.OK.status).send(exerciseList);
//     } catch (error) {
//       console.error(error);
//       res
//         .status(ExerciseApiStatus.INTERNAL_SERVER_ERROR.status)
//         .send(ExerciseApiStatus.INTERNAL_SERVER_ERROR.message);
//     }
//   };
// }
