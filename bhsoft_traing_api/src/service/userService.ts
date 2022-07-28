import { Response } from 'express';
import User from '../app/models/userModel';
import { ICart, Iuser } from '../interface';

class UserService {
     async findUser(id: string) {
          const user = await User.findById(id);
          return user;
     }
     async addToCart(id: any, payload: Array<ICart>) {
          const user = await User.findByIdAndUpdate(id, { cart: payload });
          return user;
     }
}

export default new UserService();
