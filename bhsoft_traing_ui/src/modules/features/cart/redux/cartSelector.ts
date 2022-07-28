import { IrootReducer } from '../../../../redux/reducer';

export const getDataCartSelector = (state: IrootReducer) => state.carts.cart;
