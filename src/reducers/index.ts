import {combineReducers} from 'redux';

import * as types from 'actionTypes';

export interface IForm {
    field1?: string;
    field2?: string;
}

interface IInitialState  {
    form: IForm
}


const initialState = (): IInitialState => {
    return {
        form: {
            field1: '',
            field2: ''
        }
    }
};

const reducer = combineReducers<{}>({
    form: (state = initialState(), action) => {
        switch (action.type) {
            case types.UPDATE_DATA:
                return {
                    ...state.form,
                    ...action.data,
                    field2: '2342342'
                };
            default:
                return state.form;
        }
    }
});

export const rootReducer = (state: IInitialState, action: any) => {
    return reducer(state, action);
};