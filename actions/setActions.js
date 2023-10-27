import * as types from './actionTypes';
export const updateSetAction = (set, setType, index) => {
    return {
        type: types.UPDATE_SET,
        set,
        setType,
        index
    }
}