import { Dispatch } from 'redux';
import { ActionType, createCustomAction, getType } from 'typesafe-actions';
import { loginAPI } from '../../../../commons/api';
import { ILogin, IToken, IUser } from '../../../../models';

export interface AuthState {
     auth?: string;
     user?: IUser;
}

export const setAuthAction = createCustomAction('auth/setAuth', (data: IToken) => ({
     data,
}));

export const setUserInfoAction = createCustomAction('auth/setUserInfo', (data: IUser) => ({
     data,
}));

export const login = createCustomAction('auth/login', async (data: ILogin, dispath: Dispatch) => {
     try {
          const dataRespon = await loginAPI(data);
          dispath(setAuthAction(dataRespon?.results.accessToken));
          dispath(setUserInfoAction(dataRespon?.results.user));
     } catch (error: any) {
          throw new Error('tét');
     }
});

const actions = { setAuthAction, setUserInfoAction, login };
type Action = ActionType<typeof actions>;

export default function authReducer(state: AuthState = {}, action: Action) {
     switch (action.type) {
          case getType(setAuthAction):
               console.log(action);

               return {
                    ...state,
                    auth: action.data,
               };
          case getType(setUserInfoAction):
               console.log(action);
               return {
                    ...state,
                    user: action.data,
               };
          default:
               return state;
     }
}
