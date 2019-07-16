// import React from 'react';
// import {render} from 'react-dom';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import reducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
// import App from './components/App';

// const store = createStore(reducer);

// render(
//     <Provider store={store} >
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux'
import { logger } from 'redux-logger'
import reducer from './reducers'
import './css/styles.css'
import App from "./components/App"
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)