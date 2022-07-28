import { createCustomAction } from 'typesafe-actions';
import { IToken, IUser } from '../../../../models';

export const setAuthAction = createCustomAction('auth/setAuth', (data: string) => ({
     data,
}));

export const setUserInfoAction = createCustomAction('auth/setUserInfo', (data: IUser) => ({
     data,
}));
