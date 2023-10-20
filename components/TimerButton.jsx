import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Pause from '../assets/pause.svg';
import Play from '../assets/play.svg';

const TimerButton = ({ onPress, on }) => {

    return (
        <TouchableOpacity style={styles.timerButton} onPress={onPress}>
            {on ? <Pause height={'64'} width={'64'} /> : <Play height={'64'} width={'64'} />}
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    timerButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        height: 64,
    }
});

export default TimerButton;
