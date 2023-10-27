import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, Vibration, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateSetAction } from '../actions/setActions';
import { setTimerAction, toggleTimerAction } from '../actions/timerActions';
import { colors } from '../helpers/colors';
import { getTimer, getTimerLength } from '../helpers/selectors';
import Checkbox from './Checkbox';
import Line from './Line';
import Reps from './Reps';

const SetRow = ({ set, index, showLine, setType }) => {
    const dispatch = useDispatch();
    const [repsDone, setRepsDone] = useState(set.reps);
    const timerLength = useSelector(getTimerLength)


    const handleCheck = () => {
        if (!set.completed) {
            dispatch(setTimerAction(timerLength));
            dispatch(toggleTimerAction(true));
            Vibration.vibrate();
        }
        dispatch(updateSetAction({ ...set, completed: !set.completed, completedReps: repsDone }, setType, index))
    }

    const getSuccess = () => {
        if (set.completed && set.completedReps >= set.reps) {
            return true
        }
        return false
    }

    return (
        <View style={styles.container}>
            <View style={styles.setRow}>
                <View style={styles.indexFlex}>
                    <Text style={styles.indexText}>{index + 1}</Text>
                </View>

                <View style={styles.setTextFlex}>
                    <Text style={styles.setText}>{set.name}</Text>
                </View>

                <View style={styles.weightTextFlex}>
                    <Text style={styles.weightText}>
                        {roundTo5(set.ratioBased ? set.trainingMax * set.ratioAmount : set.weight)}  x</Text>
                </View>

                <View style={styles.repsFlex}>
                    <Reps reps={set.reps} amrap={set.amrap} repsDoneHandler={setRepsDone} />
                </View>

                <View style={styles.checkboxFlex}>
                    <Checkbox completed={set.completed} onPress={() => handleCheck()} success={getSuccess()}></Checkbox>
                </View>
            </View>
            {showLine ? <Line type={'light'} /> : <></>}
        </View>
    );
};

const roundTo5 = (amount) => {

    const intAmt = Math.round(amount)
    const modAmt = intAmt % 5;

    return (modAmt > 2 ? intAmt + (5 - modAmt) : intAmt - modAmt)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    setRow: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 12,
        marginRight: 24,
    },
    title: {
        flex: .5,
        alignItems: 'stretch',
        alignSelf: 'stretch',
    },
    indexText: {
        fontSize: 24,
        color: colors.heavy,
        fontWeight: 'bold',
        textAlign: 'left',

    },
    setText: {
        fontSize: 32,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'left',

    },
    weightText: {
        fontSize: 16,
        color: colors.heavy,
        fontWeight: 'bold',
        textAlign: 'left',

    },
    indexFlex: {
        flex: 1,
        justifyContent: 'center'
    },
    setTextFlex: {
        flex: 4,
        justifyContent: 'center'
    },
    weightTextFlex: {
        flex: 1,
        justifyContent: 'center'
    },
    repsFlex: {
        flex: 1,
    },
    checkboxFlex: {
        flex: 1,
        alignItems: 'flex-start'
    }

});

export default SetRow;
