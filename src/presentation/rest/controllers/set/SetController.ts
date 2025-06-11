import { ISetController } from './ISetController';
import { Request, Response } from 'express';
import { SetApiStatus } from '@shared/constant/ApiStatus';
import { Set } from '@domain/entities/Set';
import {
  ICreateSet,
  IDeleteSet,
  IGetSet,
  IUpdateSet,
} from '@application/use-cases/set/SetUseCaseExportDir';
import {
  createSeUseCasetGlobal,
  deleteSeUseCasetGlobal,
  getSeUseCasetGlobal,
  updateSeUseCasetGlobal,
} from '@infra/locator/use-cases/SetUseCaseGlobal';
import { GetAllByUserIdResponseDto } from '@application/dto/set/GetSetDto';

export class SetController implements ISetController {
  constructor(
    private readonly createSetUseCase: ICreateSet = createSeUseCasetGlobal,
    private readonly updateSetUseCase: IUpdateSet = updateSeUseCasetGlobal,
    private readonly deleteSetUseCase: IDeleteSet = deleteSeUseCasetGlobal,
    private readonly getSetUseCase: IGetSet = getSeUseCasetGlobal
  ) {}

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.createSetUseCase.execute(req.body);
      res.status(SetApiStatus.OK.status).send(result);
    } catch (error) {
      console.error(error);
      res
        .status(SetApiStatus.INTERNAL_SERVER_ERROR.status)
        .send(SetApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      await this.updateSetUseCase.execute(req.body);
      res.status(SetApiStatus.OK.status).send(SetApiStatus.OK.message);
    } catch (error) {
      console.error(error);
      res
        .status(SetApiStatus.INTERNAL_SERVER_ERROR.status)
        .send(SetApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const setId = parseInt(req.params.id, 10);
      await this.deleteSetUseCase.executeById(setId);
      res.status(SetApiStatus.OK.status).send(SetApiStatus.OK.message);
    } catch (error) {
      console.error(error);
      res
        .status(SetApiStatus.INTERNAL_SERVER_ERROR.status)
        .send(SetApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  }

  public async get(req: Request, res: Response): Promise<void> {
    try {
      let setData: Set | Set[] | null | GetAllByUserIdResponseDto;
      switch (true) {
        case !!req.query.id:
          setData = await this.getSetUseCase.getById(Number(req.query.id));
          break;
        case !!req.query.userId:
          setData = await this.getSetUseCase.getAllByUserId(
            Number(req.query.userId)
          );
          break;
        default:
          setData = await this.getSetUseCase.getAll();
          break;
      }
      res.status(SetApiStatus.OK.status);
      res.send(setData);
    } catch (error) {
      console.log(error);
      res.status(SetApiStatus.INTERNAL_SERVER_ERROR.status);
      res.send(SetApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  }
}
