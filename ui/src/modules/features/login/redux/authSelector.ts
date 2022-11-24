import { IrootReducer } from '../../../../redux/reducer';

export const tokenAuthSelector = (state: IrootReducer) => state.authUser.auth;
