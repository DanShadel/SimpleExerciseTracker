import React, { Component, useState } from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../helpers/colors';

const Checkbox = ({ completed, onPress, success }) => {

    const getButton = () => {
        if (completed == false) {
            return ( // not checked yet
                <TouchableOpacity style={styles.circleUnchecked} onPress={onPress}>
                    <View style={styles.unchecked}></View>
                </TouchableOpacity>
            )
        }
        if (success) { //finished set
            return (
                <TouchableOpacity style={styles.circleChecked} onPress={onPress}>
                    <View style={styles.checked}></View>
                </TouchableOpacity>
            )
        } else { //failed set
            return (
                <TouchableOpacity style={styles.circleFailed} onPress={onPress}>
                    <View style={styles.crossmark}><Text style={styles.crossmarkText}>+</Text></View>
                </TouchableOpacity>
            )
        }

    }

    return (
        <View style={styles.container}>
            {getButton()}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    circleChecked: {
        height: 32,
        width: 32,
        borderWidth: 2,
        borderRadius: 32,
        backgroundColor: colors.greenComplete,
        alignItems: 'center',
    },
    circleUnchecked: {
        height: 32,
        width: 32,
        borderWidth: 2,
        borderRadius: 32
    },
    circleFailed: {
        height: 32,
        width: 32,
        borderWidth: 2,
        borderRadius: 32,
        backgroundColor: colors.redFail,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checked: {
        borderColor: "#FFFFFF",
        borderTopWidth: 2,
        borderLeftWidth: 2,
        height: 18,
        width: 10,
        marginTop: 2,
        transform: [{ rotate: '-130 deg' }],
    },
    unchecked: {

    },
    failed: {

    },
    crossmark: {
        transform: [{ rotate: '45 deg' }],
    },
    crossmarkText: {
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    }
});

export default Checkbox;
