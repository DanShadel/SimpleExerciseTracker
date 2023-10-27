import { useDispatch, useSelector } from 'react-redux';
import { delay, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionTypes.js';
import { getTimer } from '../helpers/selectors.js';
import * as selectors from '../helpers/selectors';
import { setTimerAction } from '../actions/timerActions.js';


export function* watchToggleTimer() {
    yield takeLatest(types.TOGGLE_TIMER, toggleTimer)
}

export function* toggleTimer(action) {

    console.log(action)
    let timer = yield select(selectors.getTimer)
    console.log('timer:' + timer)
    if (action.timerOn) {
        while (timer > 1) {
            yield delay(1000)
            timer = yield select(selectors.getTimer)
            yield put(setTimerAction(timer - 1))
        }
    }


}
