export interface IDatabase<ConnectionType> {
  returnPool(): Promise<ConnectionType>;
  runQuery(connection: ConnectionType, commandList: string[]): Promise<void>;
  release(connection: ConnectionType): Promise<void>;
}
