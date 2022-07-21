import { combineReducers } from 'redux';
import authReducer, { AuthState } from '../modules/features/login/redux/authReducer';

export interface IrootReducer {
     authUser: AuthState;
}

const rootReducer = combineReducers({
     authUser: authReducer,
});

export default rootReducer;
