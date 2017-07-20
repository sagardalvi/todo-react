/**
 * Created by sagardalvi on 14/07/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header/Header';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes';
import reducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, {}, applyMiddleware(sagaMiddleware, logger()));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <div className="container">
            <Header></Header>
            <div className="jumbotron">
                <Router history={browserHistory} routes={routes}/>
            </div>
        </div>
    </Provider>,
    document.getElementById('root'));