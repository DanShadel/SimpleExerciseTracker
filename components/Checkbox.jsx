import React, { Component, useState } from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../helpers/colors';

const Checkbox = ({ checked, onPress }) => {
    // const [checked, setChecked] = useState(false);
    console.log(checked)


    return (
        <TouchableOpacity style={checked ? styles.circleChecked : styles.circleUnchecked} onPress={onPress}>
            {/* {getCheckbox()} */}
        </TouchableOpacity>
    );
};

const getCheckbox = () => { }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleChecked: {
        height: 32,
        width: 32,
        borderWidth: 2,
        borderRadius: 32,
        backgroundColor: colors.greenComplete
    },
    circleUnchecked: {
        height: 32,
        width: 32,
        borderWidth: 2,
        borderRadius: 32
    }
});

export default Checkbox;
