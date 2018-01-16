import 'assets/styles/main.less';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Root} from 'components/root.jsx'
import {find, findAll} from './helpers'

ReactDOM.render(
    <Root name="Taylor" />,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('components/root.jsx', () => {
        const NewRoot = require('components/root.jsx').default;
        ReactDOM.render(
            <Root name="Taylor" />,
            document.getElementById('root')
        );
    });
}

