import { appDataSource } from '@infra/databases/dataSource/BootstrapTypeOrm';
import { IBootstrap } from '@presentation/bootstrap/IBootstrap';
import * as fs from 'fs';
import * as path from 'path';

export class BootstrapGlobal implements IBootstrap {
  public initialize = async (): Promise<void> => {
    const locatorFolder = path.resolve(__dirname);
    const files = fs.readdirSync(locatorFolder);

    for (const file of files) {
      if (file !== 'BootstrapGlobal.ts' && file.endsWith('.ts')) {
        await import(path.join(locatorFolder, file));
      }
    }
    console.log(appDataSource);
    return Promise.resolve();
  };
}
