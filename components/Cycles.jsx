import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { getSets } from '../helpers/selectors';
import Line from './Line';
import Sets from './Sets';
import Play from '../assets/play.svg';

import Collapsible from 'react-native-collapsible';
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

    console.log('primaryCollapsed:' + primaryCollapsed)
    return (
        <View style={styles.container}>
            <View style={{ ...styles.title, marginTop: 64 }}>
                <View style={styles.titleRow}>
                    <Text style={styles.titleText}> {sets.primary[0].name}</Text>
                    <TouchableOpacity style={primaryCollapsed ? styles.collapsed : styles.dropdown} onPress={() => setPrimaryCollapsed(!primaryCollapsed)}>
                        <Play height={'16'} width={'16'} />
                    </TouchableOpacity>
                </View>
                <Line type={'heavy'} />
            </View>
            <Collapsible style={styles.collapsible} collapsed={primaryCollapsed}>
                <Sets sets={sets.primary} />
            </Collapsible>


            <View style={{ ...styles.title, marginTop: 64 }}>
                <View style={styles.titleRow}>
                    <Text style={styles.titleText}> {sets.secondary[0].name}</Text>
                    <TouchableOpacity style={secondaryCollapsed ? styles.collapsed : styles.dropdown} onPress={() => setSecondaryCollapsed(!secondaryCollapsed)}>
                        <Play height={'16'} width={'16'} />
                    </TouchableOpacity>
                </View>
                <Line type={'heavy'} />
            </View>

            <Collapsible collapsed={secondaryCollapsed}>
                <Sets sets={sets.secondary} />
            </Collapsible>

            {
                sets.accessories.length > 0 ?
                    <>
                        <View style={{ ...styles.title, marginTop: 64 }}>
                            <View style={styles.titleRow}>
                                <Text style={styles.titleText}> Accessories</Text>
                                <TouchableOpacity style={accessoriesCollapsed ? styles.collapsed : styles.dropdown} onPress={() => setAccesoriesCollapsed(!accessoriesCollapsed)}>
                                    <Play height={'16'} width={'16'} />
                                </TouchableOpacity>
                            </View>
                            <Line type={'heavy'} />
                        </View>
                        <Collapsible collapsed={accessoriesCollapsed}>
                            <Sets sets={sets.accessories} />
                        </Collapsible>
                    </> : <></>
            }
        </View >
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
