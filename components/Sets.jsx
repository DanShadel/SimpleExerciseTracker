import React, { Component, useEffect } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Line from './Line';
import SetRow from './SetRow';
import Play from '../assets/play.svg';

const Sets = ({ sets, startsCollapsed, title }) => {

    const [collapsed, setCollapsed] = useState(true);

    useEffect(() => {
        setTimeout(() => setCollapsed(startsCollapsed), 250)
    }, [])

    return (
        <View style={styles.container}>
            <View style={{ ...styles.title }}>
                <View style={styles.titleRow}>
                    <Text style={styles.titleText}> {title}</Text>

                    <View style={styles.buttonBox}>
                        <TouchableOpacity style={collapsed ? styles.collapsed : styles.dropdown} onPress={() => setCollapsed(!collapsed)}>
                            <Play height={'16'} width={'16'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Line type={'heavy'} />
            </View>
            <View style={styles.collapisbleContainer} >

                <Collapsible align={'bottom'} collapsed={collapsed}>
                    {mapSets(sets)}
                </Collapsible>
            </View>
        </View>
    );
};


const mapSets = (sets) => {
    return (
        <View >
            {sets.map((set, index) => <SetRow key={index} set={set} index={index + 1} />)}
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flex: 1,
        marginLeft: 16,
    },
    title: {
        flex: .5,
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
        flex: 1

    }
});

export default Sets;
