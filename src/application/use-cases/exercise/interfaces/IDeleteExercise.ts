export interface IDeleteExercise {
  executeById(id: number): Promise<void>;
}
