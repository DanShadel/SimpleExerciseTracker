import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Exercises from './Exercises';
import Timer from './Timer';
import Pages from './Pages';
import Workout from './Workout';
import BackButton from './BackButton';
import { getPage } from '../helpers/selectors';
import { useState } from 'react';

const Tab = createBottomTabNavigator();

const Routes = () => {
	const dispatch = useDispatch();
	const page = useSelector(getPage);

	const [history, setHistory] = useState([page]);
	useEffect(() => {
		// dispatch(initDBAction())
	}, [page])

	return (
		<NavigationContainer>
			<Tab.Navigator initialRouteName="Pages" screenOptions={{ headerShown: true }}>
				<Tab.Screen name="Exercises" component={Exercises} options={{ headerShown: false }} />
				<Tab.Screen name="Workout" component={Pages} options={{ headerShadowVisible: false, headerLeft: () => <BackButton /> }} />
				<Tab.Screen name="Timer" component={Timer} options={{ headerShown: false }} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
