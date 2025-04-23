export interface IDeleteSet {
  executeById(id: number): Promise<void>;
}
