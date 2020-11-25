import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {OnBoarding} from '../features/onboarding/OnBoarding';
import {RootScreens, RootStackParamList} from './screens';
import {Auth} from '../features/auth/Auth';

const Stack = createStackNavigator<RootStackParamList>();

export const MainNavigation = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={RootScreens.OnBoarding} component={OnBoarding} />
    <Stack.Screen name={RootScreens.Register} component={Auth} />
    {/* <Stack.Screen name={RootScreens.Home} component={TabNavigation} /> */}
  </Stack.Navigator>
);
