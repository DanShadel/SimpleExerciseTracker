import * as types from '../actions/actionTypes';
import { PAGES } from '../helpers/helpers';
const INITIAL_STATE = { current: PAGES.WORKOUT };

const pageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default pageReducer;