import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Reset from '../assets/reset.svg';

const ResetButton = ({ onPress }) => {

    return (
        <TouchableOpacity style={styles.resetButton} onPress={onPress}>
            <Reset height={'64'} width={'64'} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    resetButton: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 24,
        transform: [{ scaleX: -1 }, { rotate: '15 deg' }]
    },
});

export default ResetButton;
