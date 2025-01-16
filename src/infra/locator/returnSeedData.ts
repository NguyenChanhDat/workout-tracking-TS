import { ISeedData } from '../../infra/databases/setup/seed/ISeedData';
import { MssqlSeedData } from '../../infra/databases/setup/seed/MssqlSeedData';

export const returnSeedData = (): ISeedData => {
  return new MssqlSeedData();
};
