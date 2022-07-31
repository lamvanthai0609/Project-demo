import { Request, Response } from 'express';
import { ICart } from '../../interface';
import userService from '../../service/userService';
import { success } from '../../util';

class UserController {
     async findUser(req: Request, res: Response) {
          return res.json(req);
     }

     async addCart(req: Request, res: Response) {
          const dataRequest: ICart = req.body.cart;
          const data = await userService.addToCart(req.user, dataRequest);
          success(res, data);
     }
}
export default new UserController();
