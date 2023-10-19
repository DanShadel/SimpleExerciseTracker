import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './Home';

const Stack = createNativeStackNavigator();

const Routes = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		// dispatch(initDBAction())
	})

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
