import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import reducers from './reducers';

import App from './app';

window.axios = axios.create({
    paramsSerializer: params => Qs.stringify(params, {arrayFormat: 'brackets'}),
});

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const createStoreWithMiddleware = applyMiddleware()(createStore);


render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
