/* eslint-env browser */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import reducers from './reducers/_index';
import Routes from './components/Routes';

//Styles
import styles from '../sass/styles.scss';

//middleware
const middleware = applyMiddleware(logger(), routerMiddleware(browserHistory), thunk);

// Add the reducer to your store on the `routing` key
const store = createStore(
    reducers,
    middleware
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

const root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Routes history={history}/>
    </Provider>, root);
