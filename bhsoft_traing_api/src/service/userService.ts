import { Schema } from 'mongoose';
import User from '../app/models/userModel';
import { ICart, Iuser } from '../interface';

class UserService {
     async findUser(id: string) {
          const user = await User.findById(id);
          return user;
     }
     async addToCart(id: string, payload: ICart) {
          try {
               const user: any = await this.findUser(id);
               const dataCartOld = user.cart;
               const findCart = dataCartOld.findIndex(
                    (item: ICart) => item?.product?.toString() === payload?.product?.toString(),
               );

               if (findCart !== -1) {
                    payload.quanlity === 0
                         ? dataCartOld.splice(findCart, 1)
                         : (dataCartOld[findCart].quanlity = payload.quanlity);
               } else {
                    dataCartOld.push(payload);
               }
               user.cart = dataCartOld;
               await user.save();
               const data: any = await User.findById(user._id).populate('cart.product');
               return data.cart;
          } catch (erro) {
               throw 'Erro' + erro;
          }
     }
}

export default new UserService();
