import { fork } from "redux-saga/effects";
import { watchGetDB } from './dbSagas';
export default function* rootSaga() {
    yield fork(watchGetDB)
    //yield fork(saga2)
    //yield fork(saga3)
}