import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux'
import { logger } from 'redux-logger'
import reducer from './reducers'
import './css/styles.css'
import App from "./containers/App"
import rootSaga from './sagas';
import {saveState, loadState} from './localStorage';
import throttle from 'lodash/throttle';

const sagaMiddleware = createSagaMiddleware();

const peristedState = loadState();

const store = createStore(
    reducer,
    peristedState,
    applyMiddleware(sagaMiddleware, logger),
);

store.subscribe(throttle(() => {
    saveState(store.getState());
}, 1000));

sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)