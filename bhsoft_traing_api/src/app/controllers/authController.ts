import { Request, Response } from 'express';
import { ILogin, Iuser } from '../../interface';
import authService from '../../service/authService';
import { failed, success } from '../../util';
class AuthController {
     async login(req: Request, res: Response) {
          try {
               const dataRequest: ILogin = req.body;
               const dataRespon = await authService.login(dataRequest, res);
               success(res, dataRespon);
          } catch (erro) {
               failed(res, erro);
          }
     }
     async signUp(req: Request, res: Response) {
          try {
               const dataRequest: Iuser = req.body;
               const dataRespon = await authService.signup(dataRequest, res);
               success(res, dataRespon);
          } catch (erro) {
               failed(res, erro);
          }
     }
     async refeshToken(req: Request, res: Response) {}
     async logout(req: Request, res: Response) {}
}
export default new AuthController();
