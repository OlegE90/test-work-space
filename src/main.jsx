import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Root} from './root.jsx'
import {find, findAll} from './helpers'

find();
findAll();
console.log("Running App version " + VERSION);

ReactDOM.render(
    <Root name="Taylor" />,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./root.jsx', () => {
        const NewRoot = require('./root.jsx').default;
        ReactDOM.render(
            <Root name="Taylor" />,
            document.getElementById('root')
        );
    });
}

