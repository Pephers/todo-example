import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'normalize.css';
import './scss/base.scss';

import App from './components/App';
import todos from './reducers/todos.js';

const store = createStore(todos);

React.render(
    <Provider store={store}>
        {() => <App/>}
    </Provider>,
    document.getElementById('app')
);
