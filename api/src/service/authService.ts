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
          expiresIn: '60s',
     });
     const refeshToken = jwt.sign(objToken, keyRefeshToken, {
          expiresIn: '10d',
     });
     refeshTokens.push(refeshToken);
     res.cookie('refeshToken', refeshToken, {
          httpOnly: true,
          secure: false,
          sameSite: 'strict',
          path: '/',
     });
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
          const data: any = await jwt.verify(token, keyAccessToken);
          return data;
     }
     async refeshTokenFc(refeshToken: string, res: Response) {
          try {
               const data: any = await jwt.verify(refeshToken, keyRefeshToken);

               const objToken: IObjToken = {
                    id: data.id,
                    username: data.username,
                    role: data.role,
               };
               refeshTokens = refeshTokens.filter((token) => token !== refeshToken);
               const accessTokenNew = token(objToken, res);
               return { accessToken: accessTokenNew };
          } catch (error) {
               throw 'Token hết hạn';
          }
     }
     async logout(rftoken: string, res: Response) {
          try {
               res.clearCookie('refeshToken');
               refeshTokens = refeshTokens.filter((token) => {
                    token !== rftoken;
               });
               return 'Đăng xuất thành công';
          } catch (erro) {
               throw erro;
          }
     }
}

export default new AuthService();
