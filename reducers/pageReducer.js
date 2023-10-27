import * as types from '../actions/actionTypes';
import { PAGES } from '../helpers/pages';
const INITIAL_STATE = { current: PAGES.WORKOUT };

const pageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SET_PAGE: {
            return { ...state, current: action.page }
        }
        default:
            return state;
    }
};

export default pageReducer;