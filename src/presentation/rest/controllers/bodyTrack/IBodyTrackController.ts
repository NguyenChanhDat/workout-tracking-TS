import { Response, Request } from 'express';

export interface IBodyTrackController {
  create(req: Request, res: Response): Promise<void>;
  update(req: Request, res: Response): Promise<void>;
//   delete(req: Request, res: Response): Promise<void>;
  get(req: Request, res: Response): Promise<void>;
}
