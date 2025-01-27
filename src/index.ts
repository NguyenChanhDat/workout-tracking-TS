import { returnBootstrap } from './infra/locator/returnBoostrap';
import { IBootstrap } from './presentation/bootstrap/IBootstrap';
import { rest } from './presentation/rest/app';
import { config } from 'dotenv';

config({ path: '.env' });

const bootstrap: IBootstrap = returnBootstrap();

bootstrap.initialize().then(() => {
  rest(parseInt((process.env.PORT || 8080) as string));
});
