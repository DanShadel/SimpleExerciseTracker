import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setTimerLengthAction, setTimerAction, toggleTimerAction } from '../actions/timerActions';
import * as selectors from '../helpers/selectors';
import SmallButton from './SmallButton';
import { useEffect } from 'react';
import TimerButton from './TimerButton';
import ResetButton from './ResetButton';

const Timer = () => {
    const dispatch = useDispatch();
    const timerLength = useSelector(selectors.getTimerLength);
    const timeLeft = useSelector(selectors.getTimer);
    const on = useSelector(selectors.getTimerStatus)

    return (
        <View style={styles.main}>
            <View style={styles.timerContainer}>
                <Text style={styles.timerText}> {formatTimer(timeLeft)}</Text>
            </View>
            <TimerButton on={on} onPress={() => {
                dispatch(toggleTimerAction(!on))
            }} />
            <View style={styles.controls}>
                <SmallButton title={'-15'} onPress={() => {
                    dispatch(setTimerAction(timeLeft - 15))
                    dispatch(setTimerLengthAction(timerLength - 15))
                }}
                />
                <ResetButton onPress={() => {
                    dispatch(toggleTimerAction(false))
                    dispatch(setTimerAction(timerLength))
                }} />
                <SmallButton title={'+15'} onPress={() => {
                    dispatch(setTimerAction(timeLeft + 15))
                    dispatch(setTimerLengthAction(timerLength + 15))

                }} />
            </View>
        </View >
    );
};

const formatTimer = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    if (seconds < 10) {
        return minutes + ':0' + seconds;
    }
    return minutes + ':' + seconds;
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    timerContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 64
    },
    timerText: {
        fontSize: 128,
        color: 'black',
        fontWeight: 'bold'
    },
    controls: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 16,
        marginRight: 16,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 128,
        marginBottom: 48
    },
});

export default Timer;
