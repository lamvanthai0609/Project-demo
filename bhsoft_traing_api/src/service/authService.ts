import User from '../app/models/userModel';
import { ILogin, IObjToken, Iuser } from '../interface';
import jwt from 'jsonwebtoken';
import { KEYDEFAULT } from '../constants';
import { Response } from 'express';

const keyAccessToken: string = process.env.ACCSESSTOKEN || KEYDEFAULT;
const keyRefeshToken: string = process.env.REFESHTOKEN || KEYDEFAULT;
let refeshTokens: Array<string> = [];

const token = (objToken: IObjToken, res: Response) => {
     const accessToken = jwt.sign(objToken, keyAccessToken, {
          expiresIn: '300s',
     });
     const refeshToken = jwt.sign(objToken, keyRefeshToken, {
          expiresIn: '10d',
     });
     res.cookie('refeshToken', refeshToken, {
          httpOnly: true,
          secure: false,
          sameSite: 'strict',
          path: '/',
     });
     refeshTokens.push(refeshToken);
     return accessToken;
};

class AuthService {
     async login(payload: ILogin, res: Response) {
          try {
               const user: any = await User.findOne({ username: payload.username }).populate('cart.product');
               if (user) {
                    const checkPass = user.comparePassword && (await user.comparePassword(payload.password));
                    if (checkPass) {
                         const objToken: IObjToken = {
                              id: user._id,
                              username: user.username,
                              role: user.role,
                         };
                         const accessToken = token(objToken, res);

                         const { password, ...dataUser } = user._doc;
                         return { dataUser, accessToken };
                    } else {
                         throw 'Mật khẩu không chính xác';
                    }
               } else {
                    throw 'Tài khoản không tồn tại';
               }
          } catch (erro) {
               throw erro;
          }
     }
     async signup(payload: Iuser, res: Response) {
          try {
               const checkUser = await User.findOne({ username: payload.username });
               if (!checkUser) {
                    const user = new User(payload);
                    await user.save();
                    const objToken: IObjToken = {
                         id: user._id,
                         username: user.username,
                         role: user.role,
                    };
                    const accessToken = token(objToken, res);
                    return { user, accessToken };
               } else {
                    throw 'Tài khoản đã tồn tại';
               }
          } catch (erro) {
               throw erro;
          }
     }
     async checkToken(token: string) {
          return await jwt.verify(token, keyAccessToken);
     }
}

export default new AuthService();
