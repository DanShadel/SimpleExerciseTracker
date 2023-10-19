import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import defaultReducer from './reducers/defaultReducer.js';
import rootSaga from './sagas/rootSaga.js';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({ reducer: defaultReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware) });

sagaMiddleware.run(rootSaga);

export default store;