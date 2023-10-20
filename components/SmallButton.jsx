import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const SmallButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}> {title} </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
        // borderWidth: 2,
        // borderRadius: 4,
        height: 64,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 48,
    }
});

export default SmallButton;
