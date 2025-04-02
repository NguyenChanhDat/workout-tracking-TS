import { IBootstrap } from '@presentation/bootstrap/IBootstrap';
import * as fs from 'fs';
import * as path from 'path';

export class BootstrapGlobal implements IBootstrap {
  public initialize = async (): Promise<void> => {
    const locatorFolder = path.resolve(__dirname);
    const files = fs.readdirSync(locatorFolder);

    for (const file of files) {
      if (file !== 'BootstrapGlobal.js' && file.endsWith('.js')) {
        await import(path.join(locatorFolder, file));
      }
    }
    return Promise.resolve();
  };
}
