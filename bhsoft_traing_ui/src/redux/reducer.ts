import { combineReducers } from 'redux';
import authReducer, { AuthState } from '../modules/features/login/redux/authReducer';

export interface IrootReducer {
     auth: AuthState;
}

const rootReducer = combineReducers({
     auth: authReducer,
});

export default rootReducer;
