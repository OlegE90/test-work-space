import {combineReducers} from 'redux';

import form from './form'
import {IForm} from './form'


interface IInitialState  {
    form: IForm
}

const reducer = combineReducers<{}>({
    form
});

export const rootReducer = (state: IInitialState, action: any) => {
    return reducer(state, action);
};