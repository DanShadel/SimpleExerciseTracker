import * as types from '../actions/actionTypes';
const setStructure = {
    reps: 5,
    name: 'Bench Press',
    actualWeight: '120',
    ratio: true,
    ratioAmount: '50%',
    trainingMax: '160',
    complete: false
}


const set2 = {
    reps: 5,
    name: 'Squat',
    actualWeight: '120',
    ratio: true,
    ratioAmount: '50%',
    trainingMax: '160',
    completed: false
}

const accessoriesStruct = {
    reps: 5,
    name: 'Dumbell fly',
    actualWeight: '120',
    ratio: true,
    ratioAmount: '50%',
    trainingMax: '160',
    completed: false
}
const INITIAL_STATE = { primary: [setStructure, setStructure, setStructure], secondary: [set2, set2], accessories: [accessoriesStruct, accessoriesStruct, accessoriesStruct] };


const setsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default setsReducer;