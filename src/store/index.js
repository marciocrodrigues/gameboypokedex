import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas/rootSaga';
import rooReducer from '../reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rooReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;