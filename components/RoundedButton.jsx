import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../helpers/colors';

const RoundedButton = ({ title, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onPress()}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 64,
        width: '60%',
        marginLeft: '20%',
        marginBottom: 12,
        marginTop: 12
    },
    buttonText: {
        fontSize: 24,
        color: colors.heavy,
        fontWeight: 'bold',
        textAlign: 'left',
    },
});

export default RoundedButton;
