export interface IDeletePlan {
  executeById(id: number): Promise<void>;
}
