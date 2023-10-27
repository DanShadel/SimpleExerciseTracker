import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Accessories = () => {
    return (
        <View style={styles.container}>
            <Text>Accessories</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Accessories;
