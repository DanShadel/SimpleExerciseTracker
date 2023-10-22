import * as types from '../actions/actionTypes';
const INITIAL_STATE = { timerLength: 120, timer: 120, timerOn: false };

const timerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.TOGGLE_TIMER:
            return { ...state, timerOn: action.timerOn }
        case types.SET_TIMER_LENGTH:
            return { ...state, timerLength: action.timerLength }
        case types.SET_TIMER:
            return { ...state, timer: action.timer }
        default:
            return state;
    }
};

export default timerReducer;