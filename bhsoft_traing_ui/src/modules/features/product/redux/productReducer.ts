import { ActionType, getType } from 'typesafe-actions';
import { IPagination, IProduct } from '../../../../models';
import { getAllProductAction, setPaginAction } from './productAction';
import { getAllProductThunk } from './producThunk';
export interface ProductState {
     product: Array<IProduct>;
     pagination?: IPagination;
}

const actions = { getAllProductAction, setPaginAction, getAllProductThunk };
type Action = ActionType<typeof actions>;

export function productReducer(state: ProductState = { product: [] }, action: Action) {
     switch (action.type) {
          case getType(getAllProductAction):
               const productnew = [...action.data];
               return {
                    ...state,
                    product: productnew,
               };
          case getType(setPaginAction):
               return {
                    ...state,
                    pagination: action.data,
               };
          default:
               return state;
     }
}
