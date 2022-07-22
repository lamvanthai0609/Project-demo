import { ActionType, getType } from 'typesafe-actions';

import { IUser } from '../../../../models';
import { setAuthAction, setUserInfoAction } from './authAction';
import { login } from './authThunk';

export interface AuthState {
     auth?: string;
     user?: IUser;
}

const actions = { setAuthAction, setUserInfoAction, login };
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
