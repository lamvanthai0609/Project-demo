import { loginAPI } from '../../../../commons/api';
import { ILogin } from '../../../../models';
import { setAuthAction, setUserInfoAction } from './authAction';

export const login =
     (data: ILogin): any =>
     async (dispath: any): Promise<void> => {
          const dataRespon = await loginAPI(data);
          dispath(setAuthAction(dataRespon?.results.accessToken));
          dispath(setUserInfoAction(dataRespon?.results.user));
     };
