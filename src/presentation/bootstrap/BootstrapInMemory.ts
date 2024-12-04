import { IBootstrap } from './IBootstrap';

export class BootstrapInMemory implements IBootstrap {
  public dataSourceIsInitialized = async (): Promise<boolean> => {
    return false;
  };
  public initialize = async (): Promise<void> => {
    if (!this.dataSourceIsInitialized) {
      return Promise.resolve();
    }
  };
}
