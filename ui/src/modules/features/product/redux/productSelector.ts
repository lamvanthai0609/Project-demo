import { IrootReducer } from '../../../../redux/reducer';

export const getProductSelector = (state: IrootReducer) => state.products.product;

export const getPaginator = (state: IrootReducer) => state.products.pagination;
