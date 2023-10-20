import * as types from '../actions/actionTypes';

export const setTimerLengthAction = (timerLength) => {
    return {
        type: types.SET_TIMER_LENGTH,
        timerLength
    }
}

export const toggleTimerAction = (timerOn) => {
    return {
        type: types.TOGGLE_TIMER,
        timerOn
    }
}

export const setTimerAction = (timer) => {
    return {
        type: types.SET_TIMER,
        timer
    }
}
