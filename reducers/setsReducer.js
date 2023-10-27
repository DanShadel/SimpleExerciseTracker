import * as types from '../actions/actionTypes';
import { Set } from '../helpers/Set';

const set1a = new Set('Squat', 5, 0, 0, true, .75, 210, false, false);
const set1b = new Set('Squat', 3, 0, 0, true, .85, 210, false, false);
const set1c = new Set('Squat', 1, 0, 0, true, .95, 210, true, false);
const set2a = new Set('Squat', 5, 0, 0, true, .5, 210, false, false);
const set2b = new Set('Squat', 5, 0, 0, true, .5, 210, false, false);
const set2c = new Set('Squat', 5, 0, 0, true, .5, 210, false, false);
const set2d = new Set('Squat', 5, 0, 0, true, .5, 210, false, false);
const set2e = new Set('Squat', 5, 0, 0, true, .5, 210, false, false);


const accessoriesStruct = {
    reps: 5,
    name: 'Dumbell fly',
    weight: '120',
    ratio: true,
    ratioAmount: '50%',
    trainingMax: '160',
    completed: false
}
const INITIAL_STATE = { primary: [set1a.toJson(), set1b.toJson(), set1c.toJson()], secondary: [set2a.toJson(), set2b.toJson(), set2c.toJson(), set2d.toJson(), set2e.toJson()], accessories: [accessoriesStruct, accessoriesStruct, accessoriesStruct] };

const setsReducer = (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case types.UPDATE_SET:
            let sets = [...state[action.setType]]
            sets[action.index] = action.set
            let newState = { ...state }
            newState[action.setType] = sets
            return { ...newState };
        default:
            return state;
    }
};

export default setsReducer;