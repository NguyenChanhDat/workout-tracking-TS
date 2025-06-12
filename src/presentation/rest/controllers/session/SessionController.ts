import { ISessionController } from './ISessionController';
import { Request, Response } from 'express';
import { SessionApiStatus } from '@shared/constant/ApiStatus';
import { Session } from '@domain/entities/Session';
import { ICreateSession } from '@application/use-cases/session/interfaces/ICreateSession';
import { IUpdateSession } from '@application/use-cases/session/interfaces/IUpdateSession';
import { IDeleteSession } from '@application/use-cases/session/interfaces/IDeleteSession';
import { IGetSession } from '@application/use-cases/session/interfaces/IGetSession';
import {
  createSessionUseCaseGlobal,
  deleteSessionUseCaseGlobal,
  getSessionUseCaseGlobal,
  updateSessionUseCaseGlobal,
} from '@infra/locator/use-cases/SessionUseCaseGlobal';
import { Set } from '@domain/entities/Set';
import { GetByDateUserIdResponse } from '@application/dto/set/GetSetDto';
import { GetSessionVolumeByUserIdResponseDto } from '@application/dto/session/GetSessionDto';

export class SessionController implements ISessionController {
  constructor(
    private readonly createSessionUseCase: ICreateSession = createSessionUseCaseGlobal,
    private readonly updateSessionUseCase: IUpdateSession = updateSessionUseCaseGlobal,
    private readonly deleteSessionUseCase: IDeleteSession = deleteSessionUseCaseGlobal,
    private readonly getSessionUseCase: IGetSession = getSessionUseCaseGlobal
  ) {}

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.createSessionUseCase.execute(req.body);
      res.status(SessionApiStatus.OK.status).send(result);
    } catch (error) {
      console.error(error);
      res
        .status(SessionApiStatus.INTERNAL_SERVER_ERROR.status)
        .send(SessionApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const sessionId = Number(req.body.id);
      await this.updateSessionUseCase.execute(sessionId, req.body);
      res.status(SessionApiStatus.OK.status).send(SessionApiStatus.OK.message);
    } catch (error) {
      console.log(error);

      res
        .status(SessionApiStatus.INTERNAL_SERVER_ERROR.status)
        .send(SessionApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const sessionId = Number(req.params.id);
      await this.deleteSessionUseCase.execute(sessionId);
      res.status(SessionApiStatus.OK.status).send(SessionApiStatus.OK.message);
    } catch (error) {
      res
        .status(SessionApiStatus.INTERNAL_SERVER_ERROR.status)
        .send(SessionApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  }

  public get = async (req: Request, res: Response): Promise<void> => {
    try {
      let sessionData:
        | Set[]
        | Session
        | Session[]
        | null
        | GetByDateUserIdResponse
        | GetSessionVolumeByUserIdResponseDto;

      switch (true) {
        case !!req.query.id:
          sessionData = await this.getSessionUseCase.getById(
            Number(req.query.id)
          );
          break;

        case !!req.query.planId:
          sessionData = await this.getSessionUseCase.getByPlanId(
            Number(req.query.planId)
          );
          break;

        case !!req.query.date && !!req.query.userId:
          sessionData = await this.getSessionUseCase.getByDateUserId({
            date: new Date(String(req.query.date)),
            userId: Number(req.query.userId),
          });
          break;
        case !!req.query.userId:
          sessionData = await this.getSessionUseCase.getSessionVolumeByUserId(
            Number(req.query.userId)
          );
          break;
        default:
          sessionData = await this.getSessionUseCase.getAll();
          break;
      }

      res.status(SessionApiStatus.OK.status);
      res.send(sessionData);
    } catch (error) {
      console.error(error);
      res
        .status(SessionApiStatus.INTERNAL_SERVER_ERROR.status)
        .send(SessionApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  };
}
