import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Onboarding} from '../screens/Onboarding';

const Stack = createStackNavigator();

export const MainNavigation = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={'Onboarding'} component={Onboarding} />
  </Stack.Navigator>
);
