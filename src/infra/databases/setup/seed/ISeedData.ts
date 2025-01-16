export interface ISeedData {
  createTable(): Promise<void>;
  insertData(): Promise<void>;
}
