import { fork } from "redux-saga/effects";
import { initDB, watchGetDB } from './dbSagas';

export default function* rootSaga() {
    // yield fork(initDB)
    // yield fork(watchGetDBr)
}