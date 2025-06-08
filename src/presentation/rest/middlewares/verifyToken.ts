import { BEARER_AUTH_SCHEMA, BEARER_WORD_LENGTH } from '../constants/token.js';
import { NextFunction, Response, Request } from 'express';
import { UserApiStatus } from '@shared/constant/ApiStatus.js';
import { ITokenServices } from '@application/services/interfaces/ITokenServices.js';
import { tokenServicesGlobal } from '@infra/locator/repository/TokenRepositoryGlobal.js';

export class TokenVerifyMiddleware {
  constructor(
    private readonly tokenServices: ITokenServices = tokenServicesGlobal
  ) {}

  public verifyToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith(BEARER_AUTH_SCHEMA)) {
      res.status(UserApiStatus.UNAUTHORIZED.status);
      res.send(UserApiStatus.UNAUTHORIZED);
      return;
    }
    const tokenExtracted = authHeader.slice(BEARER_WORD_LENGTH);
    try {
      const tokenSecret = process.env.TOKEN_SECRET;
      if (!tokenSecret) {
        res.status(UserApiStatus.UNAUTHORIZED.status);
        res.send(UserApiStatus.UNAUTHORIZED);
        return;
      }
      const verified = await this.tokenServices.verifyToken(tokenExtracted);

      if (verified) {
        next();
      }
    } catch (error) {
      res.status(UserApiStatus.UNAUTHORIZED.status);
      res.send(UserApiStatus.UNAUTHORIZED);
    }
  };
}
