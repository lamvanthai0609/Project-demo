import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const composeEnhancers = composeWithDevTools({});

const persistConfig = {
     key: 'BHSoft_Traing',
     storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);

export default store;
