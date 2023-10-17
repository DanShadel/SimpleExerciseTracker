import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TitleButton from './TitleButton';

const Home = ({ navigation }) => {
	return (
		<>
			<View style={styles.titleContainer}>
				<Text style={styles.titleText}>Home</Text>
			</View>
			{/* <View style={styles.buttonContainer}>
				<TitleButton title={'Title'} onPress={() => { navigation.navigate('someRoute'); }} disabled={true} />
			</View> */}
		</>
	);
};

const styles = StyleSheet.create({
	titleContainer: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
		color: 'black'
	},
	titleText: {
		fontSize: 64,
		color: 'black',
	},
	buttonContainer: {
		flex: 4,
		alignItems: 'center',
	}
});

export default Home;