import * as React from 'react';

/**
 * Свойства компонента.
 */
interface IProps {
    name: string;
}

export class Root extends React.Component<IProps, {}> {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <form>
                    <input type="text"/> <br/>
                    <input type="text"/> <br/>
                    <input type="text"/> <br/>
                    <input type="text"/> <br/>
                </form>
            </div>
        );
    }
}