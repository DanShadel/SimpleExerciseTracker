import { takeEvery } from 'redux-saga/effects';
import * as types from '../actions/actionTypes.js';

export function* watchGetDB() {
    yield takeEvery(types.GET_DB, getDB)
}

export function* getDB(action) {

    console.log('invoked getDB');
}

