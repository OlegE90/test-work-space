import * as React from 'react';

import Form from 'components/Form';


interface IProps {
    name: string;
}

export class Root extends React.Component<IProps, {}> {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <Form />
            </div>
        );
    }
}