import { Response, Request } from 'express';
export interface IUserController {
  create(req: Request, res: Response): Promise<void>;
  update(eq: Request, res: Response): Promise<void>;
  delete(req: Request, res: Response): Promise<void>;
  get(req: Request, res: Response): Promise<void>;
  adminLogin(req: Request, res: Response): Promise<void>;
  userLogin(req: Request, res: Response): Promise<void>;
  adminSignup(req: Request, res: Response): Promise<void>;
  userSignup(req: Request, res: Response): Promise<void>;
}
