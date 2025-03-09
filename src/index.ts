import { BootstrapGlobal } from './infra/locator/BootstrapGlobal';
import { IBootstrap } from './presentation/bootstrap/IBootstrap';
import { rest } from './presentation/rest/app';
import { config } from 'dotenv';

config({ path: '.env' });

const bootstrap: IBootstrap = new BootstrapGlobal();

bootstrap.initialize().then(() => {
  rest(parseInt((process.env.PORT || 8080) as string));
});
