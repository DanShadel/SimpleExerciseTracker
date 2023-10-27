import * as types from './actionTypes';

export const setPageAction = (page) => {
    return {
        type: types.SET_PAGE,
        page
    }
}