import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { PAGES } from '../helpers/helpers';
import { getPage, getSets } from '../helpers/selectors';
import Cycles from './Cycles';
import Sets from './Sets';

const Workout = () => {
    const sets = useSelector(getSets);

    return (
        <View style={styles.container}>
            <Sets sets={sets.primary} startsCollapsed={false} title={sets.primary[0].name} />
            <Sets sets={sets.secondary} title={sets.secondary[0].name} startsCollapsed={false} />
            <Sets sets={sets.accessories} title={'Accessories'} startsCollapsed={true} />
        </View >
    )
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 48
    },
});

export default Workout;
