import { ActionType, getType } from 'typesafe-actions';
import { INotification } from '../../../models';
import { setNotifiAction } from './notiAction';

export interface NotiState {
     noti?: Array<INotification>;
}

const actions = { setNotifiAction };
type Action = ActionType<typeof actions>;

export function notiReducer(state: NotiState = {}, action: Action) {
     switch (action.type) {
          case getType(setNotifiAction):
               const notiold = state.noti || [];
               return {
                    ...state,
                    noti: [...notiold, action.data],
               };
          default:
               return state;
     }
}
