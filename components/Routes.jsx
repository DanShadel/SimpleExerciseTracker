import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Exercises from './Exercises';
import Timer from './Timer';
import Pages from './Pages';
import Workout from './Workout';

const Tab = createBottomTabNavigator();

const Routes = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		// dispatch(initDBAction())
	})

	return (
		<NavigationContainer>
			<Tab.Navigator initialRouteName="Pages" screenOptions={{ headerShown: false }}>
				<Tab.Screen name="Exercises" component={Exercises} />
				<Tab.Screen name="Workout" component={Pages} />
				<Tab.Screen name="Timer" component={Timer} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
