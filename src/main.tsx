import 'assets/styles/main.less';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Root} from 'components/root'

ReactDOM.render(
    <Root name="Taylor" />,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('components/root', () => {
        const NewRoot = require('components/root').default;
        ReactDOM.render(
            <Root name="Taylor" />,
            document.getElementById('root')
        );
    });
}

