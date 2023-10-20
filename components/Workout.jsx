import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { PAGES } from '../helpers/helpers';
import { getPage } from '../helpers/selectors';
import Cycles from './Cycles';

const Workout = () => {
    const dispatch = useDispatch();
    const page = useSelector(getPage);

    const handleCurrentPage = (page) => {
        console.log(page);
        switch (page) {
            case PAGES.CYCLES:
                return <Cycles />
            default:
                return <Cycles />
        }
    }

    return handleCurrentPage(page);
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default Workout;
