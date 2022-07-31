import { loginAPI, logoutAPI, refeshTokenAPI } from '../../../../commons/api';
import { ILogin } from '../../../../models';
import { setDataCartAction } from '../../cart/redux/cartAction';
import { setAuthAction, setUserInfoAction } from './authAction';

export const login =
     (data: ILogin): any =>
     async (dispath: any): Promise<void> => {
          const dataRespon = await loginAPI(data);
          console.log(dataRespon);

          localStorage.setItem('token', dataRespon?.results.accessToken);
          dispath(setAuthAction(dataRespon?.results.accessToken));
          dispath(setUserInfoAction(dataRespon?.results.dataUser));
          dispath(setDataCartAction(dataRespon?.results.dataUser.cart));
     };

export const refeshToken = (): any => async (dispath: any) => {
     const dataRespon = await refeshTokenAPI();
     console.log(dataRespon);
     localStorage.setItem('token', dataRespon?.results.accessToken);
     dispath(setAuthAction(dataRespon?.results.accessToken));
};

export const logout = () => async (dispath: any) => {
     const dataRespon = await logoutAPI();
     dispath(setAuthAction(''));
     localStorage.removeItem('token');
     return dataRespon;
};
