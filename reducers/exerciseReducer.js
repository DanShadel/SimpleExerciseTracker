import * as types from '../actions/actionTypes';
import { PAGES } from '../helpers/helpers';
const INITIAL_STATE = { current: PAGES.CYCLES };

const exerciseReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case: 'ADD_EXERC'
        default:
            return state;
    }
};

export default exerciseReducer;