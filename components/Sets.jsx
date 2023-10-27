import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Line from './Line';
import SetRow from './SetRow';

const Sets = ({ sets, title, setType }) => {

    return (
        <View style={styles.container}>
            <View style={{ ...styles.title }}>
                <View style={styles.titleRow}>
                    <Text style={styles.titleText}> {title}</Text>
                </View>
                <Line type={'heavy'} />
            </View>
            <View style={styles.collapisbleContainer} >
                {mapSets(sets, setType)}
            </View>
        </View>
    );
};


const mapSets = (sets, setType) => {
    return (
        <View style={styles.setRow} >
            {sets.map((set, index) => <SetRow key={index} set={set} index={index} setType={setType} showLine={index != sets.length - 1} />)}
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flex: 1,
        marginLeft: 16,
        marginBottom: 8
    },
    title: {
        alignItems: 'stretch',
        alignSelf: 'stretch',
    },
    titleText: {
        fontSize: 52,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'left'
    },
    titleRow: {
        flexDirection: 'row',
        alignSelf: 'stretch',
    },
    dropdown: {
        height: 32,
        width: 32,
        transform: [{ rotate: '-90 deg' }],
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 64
    },
    buttonBox: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        flex: 1,
        marginRight: 32
    },
    collapsed: {
        height: 32,
        width: 32,
        transform: [{ rotate: '90 deg' }],
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 64
    },

    collapisbleContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    setRow: {
        flex: 1,
        // borderWidth: 2,
    }
});

export default Sets;
