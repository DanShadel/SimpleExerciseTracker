import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { getSets } from '../helpers/selectors';
import Line from './Line';
import Sets from './Sets';
import Play from '../assets/play.svg';

import { useState } from 'react';
import { useEffect } from 'react';


const Cycles = () => {
    const sets = useSelector(getSets);
    const [primaryCollapsed, setPrimaryCollapsed] = useState(true)
    const [secondaryCollapsed, setSecondaryCollapsed] = useState(true)
    const [accessoriesCollapsed, setAccesoriesCollapsed] = useState(true)

    useEffect(() => {
        setPrimaryCollapsed(false)
        setSecondaryCollapsed(false)
    }, [])

    return (
        <View>
            <Text>Cycles</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    title: {
        marginLeft: 16,
        flex: 1,
        alignItems: 'flex-start',
    },
    titleText: {
        fontSize: 52,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'left'
    },
    dropdown: {
        transform: [{ rotate: '-90 deg' }],
        justifyContent: 'center',
        alignItems: 'center',
        flex: .5,
        marginLeft: 64
    },
    collapsed: {
        transform: [{ rotate: '90 deg' }],
        justifyContent: 'center',
        alignItems: 'center',
        flex: .5,
        marginLeft: 64
    },
    titleRow: {
        flexDirection: 'row',
    },

    collapsible: {
        borderWidth: 2,
    },
});

export default Cycles;
