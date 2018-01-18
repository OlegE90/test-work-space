const UPDATE_DATA = 'form/UPDATE_DATA';

export interface IForm {
    field1?: string;
    field2?: string;
}

const initialState = (): {form: IForm} => {
    return {
        form: {
            field1: '',
            field2: ''
        }
    }
};

export default function reducer(state = initialState(), action: any) {
    switch (action.type) {
        case UPDATE_DATA:
            return {
                ...state.form,
                ...action.data
            };
        default:
            return state.form;
    }
}

export function updateData (data: IForm) {
    return function (dispatch: any) {
        return dispatch({
            type: UPDATE_DATA,
            data
        });
    };
}