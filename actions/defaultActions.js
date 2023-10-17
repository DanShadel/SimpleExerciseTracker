import * as types from './actionTypes';

export const setSomethingAction = (data) => {
    return {
        type: types.SET_SOMETHING,
        data
    };
};

export const getDBAction = () => {
    return {
        type: types.GET_DB,
    }
}
