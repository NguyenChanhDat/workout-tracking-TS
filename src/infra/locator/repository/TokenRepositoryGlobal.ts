import { ITokenServices } from '@application/services/interfaces/ITokenServices';
import { JWT } from '@infra/security/JWT';

export const tokenServicesGlobal: ITokenServices = new JWT();
