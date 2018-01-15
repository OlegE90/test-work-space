import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Root} from './root.jsx'

ReactDOM.render(
    <Root name="Taylor" />,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./root.jsx', (err) => {
        const NewRoot = require('./root.jsx').default;
        ReactDOM.render(
            <Root name="Taylor" />,
            document.getElementById('root')
        );
    });
}

