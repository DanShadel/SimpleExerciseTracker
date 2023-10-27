import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import exerciseReducer from './reducers/exerciseReducer.js';
import pageReducer from './reducers/pageReducer.js';
import setsReducer from './reducers/setsReducer.js';
import timerReducer from './reducers/timerReducer.js';
import rootSaga from './sagas/rootSaga.js';

const reducer = { timer: timerReducer, page: pageReducer, exercise: exerciseReducer, sets: setsReducer }
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({ reducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware) });

sagaMiddleware.run(rootSaga);

export default store;