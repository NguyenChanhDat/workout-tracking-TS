import { IBootstrap } from '../../../presentation/bootstrap/IBootstrap';

export class BootstrapInMemory implements IBootstrap {
  public initialize = async (): Promise<void> => {
    return Promise.resolve();
  };
}
