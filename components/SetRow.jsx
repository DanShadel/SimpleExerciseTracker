import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { colors } from '../helpers/colors';
import Checkbox from './Checkbox';
import Line from './Line';


const SetRow = ({ set, index }) => {
    // console.log(set)
    // const dispatch = useDispatch();
    //TODO: Update checkbox functionality and finish this component 
    return (
        <View style={styles.container}>
            <View style={styles.setRow}>
                <View style={styles.indexFlex}>
                    <Text style={styles.indexText}>{index}</Text>
                </View>

                <View style={styles.setTextFlex}>
                    <Text style={styles.setText}>{set.name}</Text>
                </View>

                <Checkbox checked={set.completed} onPress={undefined}></Checkbox>
            </View>
            <Line type={'light'} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    setRow: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 12,
        // borderWidth: 2,
        // borderColor: 'red'
    },
    title: {
        flex: .5,
        alignItems: 'stretch',
        alignSelf: 'stretch',
    },
    indexText: {
        fontSize: 24,
        color: colors.light,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    setText: {
        fontSize: 32,
        color: colors.heavy,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    indexFlex: {
        flex: 1,
        borderWidth: 1,
    },
    setTextFlex: {
        flex: 8,
        borderWidth: 1,
    },

});

export default SetRow;
