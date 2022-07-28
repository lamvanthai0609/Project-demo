import { combineReducers } from 'redux';
import { cartReducer, CartState } from '../modules/features/cart/redux/cartReducer';
import { authReducer, AuthState } from '../modules/features/login/redux/authReducer';
import { productReducer, ProductState } from '../modules/features/product/redux/productReducer';
import { notiReducer, NotiState } from './common/notification/notiReducer';

export interface IrootReducer {
     authUser: AuthState;
     products: ProductState;
     carts: CartState;
     notification: NotiState;
}

const rootReducer = combineReducers({
     authUser: authReducer,
     products: productReducer,
     carts: cartReducer,
     notification: notiReducer,
});

export default rootReducer;
