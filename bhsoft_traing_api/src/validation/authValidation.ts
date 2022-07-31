import { NextFunction, Request, Response } from 'express';
import { ILogin, Iuser } from '../interface';
import { checkFomat, checkMail, failed } from '../util';

class AuthValidation {
     login(req: Request, res: Response, next: NextFunction) {
          const dataRequest: ILogin = {
               username: req.body.username,
               password: req.body.password,
          };
          if (!dataRequest.username) return failed(res, 'Tài khoản không được trống', 401);
          if (!dataRequest.password) return failed(res, 'Mật khẩu không được trống', 401);

          if (checkFomat(dataRequest.username)) return failed(res, 'Tài khoản không hợp lệ', 401);
          if (checkFomat(dataRequest.password)) return failed(res, 'Tài khoản không hợp lệ', 401);

          req.body = dataRequest;
          next();
     }

     sigup(req: Request, res: Response, next: NextFunction) {
          const dataRequest: Iuser = {
               username: req.body.username,
               password: req.body.password,
               name: req.body.name,
               email: req.body.email,
               role: req.body.role,
               cart: [],
          };
          if (!dataRequest.username) return failed(res, 'Tài khoản không được trống', 401);
          if (!dataRequest.password) return failed(res, 'Mật khẩu không được trống', 401);
          if (!dataRequest.name) return failed(res, 'Tên không được trống', 401);
          if (!dataRequest.email) return failed(res, 'Email không được trống', 401);

          if (checkFomat(dataRequest.username)) return failed(res, 'Tài khoản không hợp lệ', 401);
          if (checkFomat(dataRequest.password)) return failed(res, 'Mật khẩu không hợp lệ', 401);
          if (checkFomat(dataRequest.name)) return failed(res, 'Tên không hợp lệ', 401);
          if (!checkMail(dataRequest.email)) return failed(res, 'Email không hợp lệ', 401);
          req.body = dataRequest;
          next();
     }

     refeshToken(req: Request, res: Response, next: NextFunction) {
          const token = req.cookies.refeshToken;
          if (!token) return failed(res, 'Token không tồn tại', 401);
          req.body.token = token;
          next();
     }
}

export default new AuthValidation();
