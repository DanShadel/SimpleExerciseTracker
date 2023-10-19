import * as types from '../actions/actionTypes';
const INITIAL_STATE = { timerLength: 120 };

const defaultReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case types.SET_DB:
        default:
            return state;
    }
};

export default defaultReducer;