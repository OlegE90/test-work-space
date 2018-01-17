import {applyMiddleware, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {rootReducer} from './reducers';

export const configureStore = (initialState: any = {}) => {
    return createStore(rootReducer, initialState,
        compose(
            applyMiddleware(thunkMiddleware)
        )
    );
};