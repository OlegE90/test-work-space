import * as React from 'react';

export class Root extends React.Component {
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