import * as types from '../constants/actionTypes';

export const setSomethingAction = (data) => {
    return {
        type: types.SET_SOMETHING,
        data
    };
};
