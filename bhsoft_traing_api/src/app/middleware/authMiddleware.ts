import { NextFunction, Request, Response } from 'express';
import { ILogin, Iuser } from '../../interface';
import { checkMail, failed } from '../../util';
import { checkFomat } from '../../util';

class AuthMiddleware {
     login(req: Request, res: Response, next: NextFunction) {}

     sigup(req: Request, res: Response, next: NextFunction) {
          next();
     }
}
export default new AuthMiddleware();
