import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './Reducers/index';

export const middleware = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export const Store = createStoreWithMiddleware(RootReducer);