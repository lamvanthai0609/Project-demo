import { combineReducers } from 'redux';
import { authReducer, AuthState } from '../modules/features/login/redux/authReducer';
import { productReducer, ProductState } from '../modules/features/product/redux/productReducer';

export interface IrootReducer {
     authUser: AuthState;
     products: ProductState;
}

const rootReducer = combineReducers({
     authUser: authReducer,
     products: productReducer,
});

export default rootReducer;
