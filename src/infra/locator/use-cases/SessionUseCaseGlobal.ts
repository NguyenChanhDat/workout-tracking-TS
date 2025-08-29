import {
  CreateSession,
  DeleteSession,
  GetSession,
  UpdateSession,
  ICreateSession,
  IDeleteSession,
  IGetSession,
  IUpdateSession,
} from '@application/use-cases/session/SessionUseCaseExportDir';

export const createSessionUseCaseGlobal: ICreateSession = new CreateSession();
export const deleteSessionUseCaseGlobal: IDeleteSession = new DeleteSession();
export const getSessionUseCaseGlobal: IGetSession = new GetSession();
export const updateSessionUseCaseGlobal: IUpdateSession = new UpdateSession();
