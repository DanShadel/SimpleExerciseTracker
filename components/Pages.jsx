import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { PAGES } from '../helpers/pages';
import { getPage } from '../helpers/selectors';
import Accessories from './Accessories';
import Cycles from './Cycles';
import Workout from './Workout';

const Pages = () => {
    const dispatch = useDispatch();
    const page = useSelector(getPage);


    const handleCurrentPage = (page) => {
        switch (page) {
            case PAGES.CYCLES:
                return <Cycles />
            case PAGES.WORKOUT:
                return <Workout />
            case PAGES.ACCESSORIES:
                return <Accessories />
            default:
                return <Cycles />
        }
    }

    return (
        <View style={styles.main}>
            {handleCurrentPage(page)}
        </View>
    )
};



const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});

export default Pages;
