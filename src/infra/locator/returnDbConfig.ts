import { MssqlConfig } from '../../infra/databases/config/config';
import { MssqlConfigType } from '../../infra/databases/config/configType';
export const returnMssqlConfig = (): MssqlConfigType => {
  return MssqlConfig;
};
