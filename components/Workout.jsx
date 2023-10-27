import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { PAGES } from '../helpers/pages';
import { getPage, getSets } from '../helpers/selectors';
import Cycles from './Cycles';
import RoundedButton from './RoundedButton';
import Sets from './Sets';
import { setPageAction } from '../actions/pageActions'

const Workout = () => {
    const dispatch = useDispatch();
    const sets = useSelector(getSets);

    return (
        <View style={styles.container}>
            <View style={{ flex: sets.primary.length }}>
                <Sets sets={sets.primary} setType={'primary'} title={sets.primary[0].name} />
            </View>
            <View style={{ flex: sets.secondary.length }}>
                <Sets sets={sets.secondary} setType={'secondary'} title={sets.secondary[0].name} />
            </View>
            <View style={{ flex: 1 }}>
                <RoundedButton title={'Accessories'} onPress={() => dispatch(setPageAction(PAGES.ACCESSORIES))} />
            </View>
        </View >
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default Workout;
