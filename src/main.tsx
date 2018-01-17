import 'assets/styles/main.less';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {Root} from 'components/Root'
import {configureStore} from './configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}><Root name="Taylor" /></Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('components/Root', () => {
        const NewRoot = require('components/Root').default;
        ReactDOM.render(
            <Provider store={store}><Root name="Taylor" /></Provider>,
            document.getElementById('root')
        );
    });
}

