import { NextFunction, Request, Response } from 'express';
import authService from '../../service/authService';
import UserService from '../../service/userService';

import { failed } from '../../util';

class AuthMiddleware {
     async authentication(req: Request, res: Response, next: NextFunction) {
          try {
               const token = req.header('Authorization');
               if (!token) throw 'Invalid token';
               const data: any = await authService.checkToken(token);
               const user = await UserService.findUser(data.id);
               if (!user) throw 'Invalid User!';
               req.user = data.id;
               next();
          } catch (error) {
               failed(res, 'Unauthorized error!', 401);
          }
     }
}
export default new AuthMiddleware();
