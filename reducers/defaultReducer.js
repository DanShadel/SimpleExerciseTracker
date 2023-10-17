import * as types from '../constants/actionTypes';
const INITIAL_STATE = {};

const defaultReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SET_SOMETHING:
        default:
            return state;
    }
};

export default defaultReducer;