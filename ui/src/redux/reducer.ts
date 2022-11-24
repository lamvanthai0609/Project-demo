import { combineReducers } from 'redux';
import { cartReducer, CartState } from '../modules/features/cart/redux/cartReducer';
import { authReducer, AuthState } from '../modules/features/login/redux/authReducer';
import { productReducer, ProductState } from '../modules/features/product/redux/productReducer';

export interface IrootReducer {
     authUser: AuthState;
     products: ProductState;
     carts: CartState;
}

const rootReducer = combineReducers({
     authUser: authReducer,
     products: productReducer,
     carts: cartReducer,
});

export default rootReducer;
