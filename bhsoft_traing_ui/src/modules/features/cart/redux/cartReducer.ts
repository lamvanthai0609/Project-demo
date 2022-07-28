import { ActionType, getType } from 'typesafe-actions';
import { ICart } from '../../../../models/cart';
import { setDataCartAction } from './cartAction';

export interface CartState {
     cart?: Array<ICart>;
}
const actions = { setDataCartAction };
type Action = ActionType<typeof actions>;

export const cartReducer = (state: CartState = {}, action: Action) => {
     switch (action.type) {
          case getType(setDataCartAction):
               return {
                    ...state,
                    cart: action.data,
               };
          default:
               return state;
     }
};
