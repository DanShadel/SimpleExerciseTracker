import { fork } from "redux-saga/effects";
import { watchToggleTimer } from "./timerSagas";

export default function* rootSaga() {
    // yield fork(initDB)
    // yield fork(watchGetDBr)
    yield fork(watchToggleTimer)

}