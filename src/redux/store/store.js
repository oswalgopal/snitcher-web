import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducer/rootReducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);
