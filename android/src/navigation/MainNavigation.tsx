import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {OnBoarding} from '../screens/OnBoarding';

const Stack = createStackNavigator();

export const MainNavigation = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={'Onboarding'} component={OnBoarding} />
  </Stack.Navigator>
);
