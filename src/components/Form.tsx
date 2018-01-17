import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as types from 'actionTypes';

import {IForm} from '../reducers'

function updateData (data: IForm) {
    return function (dispatch: any) {
        // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
        // in this case at this point we could call a service that would persist the fuel savings
        return dispatch({
            type: types.UPDATE_DATA,
            data
        });
    };
}

interface IProps {
    actions: any,
    form: IForm,
}

interface IState {
    form?: IForm,
}

class Form extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            form: {...props.form}
        };

    }

    componentWillReceiveProps(newProps: IProps) {
        console.log(newProps.form);
        this.setState({
            form: {...newProps.form}
        });
    }


    handleChangeField = (event: any) => {
        const field1 = event.target.value;

        this.setState((prevState) => ({
            form: {
                ...(prevState.form || {}),
                field1
            }
        }));

        this.props.actions.updateData({field1});

    };

    render() {
        const {form} = this.state;

        return (
            <div>
                <form>
                    <input value={form && form.field1} onChange={this.handleChangeField} type="text"/>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        form: state.form
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators({updateData}, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);
