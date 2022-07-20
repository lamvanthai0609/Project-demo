import { ActionType, createCustomAction, getType } from 'typesafe-actions';
import { IToken, IUser } from '../../../../models';

export interface AuthState {
     auth?: IToken;
     user?: IUser;
}

export const setAuthAction = createCustomAction('auth/setAuth', (data: IToken) => ({
     data,
}));

export const setUserInfoAction = createCustomAction('auth/setUserInfo', (data: IUser) => ({
     data,
}));
const actions = { setAuthAction, setUserInfoAction };
type Action = ActionType<typeof actions>;

export default function authReducer(state: AuthState = {}, action: Action) {
     switch (action.type) {
          case getType(setAuthAction):
               return {
                    ...state,
                    auth: action.data,
               };
          case getType(setUserInfoAction):
               return {
                    ...state,
                    user: action.data,
               };
          default:
               return state;
     }
}
