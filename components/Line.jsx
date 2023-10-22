import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../helpers/colors';

const Line = ({ type }) => {

    const styleType = getStyleType(type);
    return (
        <View style={styleType} />
    );
};

const getStyleType = (type) => {
    switch (type) {
        case 'heavy':
            return styles.heavy;
        case 'light':
            return styles.light
        default:
            return styles.light
    }

}

const styles = StyleSheet.create({
    light: {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        width: '90%',
        marginRight: '10%',
        borderColor: colors.light,
        marginLeft: 12
    },
    heavy: {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 2,
        width: '90%',
        marginRight: '10%',
        borderColor: colors.heavy,
        marginLeft: 12
    },

});

export default Line;
