import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {IForm, updateData} from 'redux/form'

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
                <form className="mainForm">
                    <span>Ваше имя</span>
                    <div className="field">
                        <input value={form && form.field1} onChange={this.handleChangeField} type="text"/>
                    </div>
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
