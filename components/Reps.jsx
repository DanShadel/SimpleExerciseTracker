import React, { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { colors } from '../helpers/colors';

const Reps = ({ reps, amrap, repsDoneHandler }) => {

    const amrapString = "+";
    const [edited, setEdited] = useState(false)

    const getPlaceholderText = () => {
        const text = amrap ? reps + amrapString : reps.toString()
        return text
    }


    const onChange = (repsFinished) => {
        setEdited(true);
        console.log('repsFinished: ' + repsFinished)
        if (!edited) {
            console.log(reps)
            repsDoneHandler(parseInt(reps));
        } else {
            repsDoneHandler(repsFinished)
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <TextInput
                    style={styles.text}
                    onChangeText={(repsFinished) => onChange(repsFinished)}
                    value={reps}
                    placeholder={getPlaceholderText()}
                    placeholderTextColor={amrap || edited ? colors.veryLight : 'black'}
                />
            </TouchableOpacity>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    button: {
        color: 'black',
        flex: 1,
        justifyContent: 'center',
        width: 24
    },
});

export default Reps;
