export interface IRestoreDatabase {
  executeWithFileName(fileName: string): Promise<void>;
}
