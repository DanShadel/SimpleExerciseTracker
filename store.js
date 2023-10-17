import { configureStore } from '@reduxjs/toolkit';
import defaultReducer from './reducers/defaultReducer.js';

const store = configureStore({ reducer: defaultReducer });


export default store;