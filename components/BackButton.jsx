import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Back from '../assets/backArrow.svg';
import { getPage } from '../helpers/selectors';
import { PAGES } from '../helpers/pages';
import { setPageAction } from '../actions/pageActions';

const BackButton = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(getPage);

    console.log(getPreviousRoute(currentPage))
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => dispatch(setPageAction(getPreviousRoute(currentPage)))}>
                <Back />
            </TouchableOpacity>
        </View>
    );
};

const onPressHandler = (currentPage) => {
    getPreviousRoute(currentPage)

}

const getPreviousRoute = (page) => {
    switch (page) {
        case PAGES.CYCLES:
            return PAGES.CYCLES;
        case PAGES.WORKOUT:
            return PAGES.CYCLES;
        case PAGES.ACCESSORIES:
            return PAGES.WORKOUT;
        default:
            return PAGES.CYCLES;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

})

export default BackButton;
