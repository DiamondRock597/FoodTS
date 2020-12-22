import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {RootScreens, RootStackParamList} from './screens';
import {OnBoarding} from '@features/onboarding/OnBoarding';
import {Auth} from '@features/auth/Auth';
import {TabNavigation} from './Tab/TabNavigation';
import {Dish} from '@features/dish_details/Dish';
import {Search} from '@features/search/Search';
import {Profile} from '@features/profile/Profile';
import {Orders} from '@features/orders/Orders';

const Stack = createStackNavigator<RootStackParamList>();

export const MainNavigation = () => (
  <Stack.Navigator initialRouteName={RootScreens.OnBoarding} screenOptions={{headerShown: false}}>
    <Stack.Screen name={RootScreens.OnBoarding} component={OnBoarding} />
    <Stack.Screen name={RootScreens.Register} component={Auth} />
    <Stack.Screen name={RootScreens.Home} component={TabNavigation} />
    <Stack.Screen name={RootScreens.Dish} component={Dish} />
    <Stack.Screen name={RootScreens.Search} component={Search} />
    <Stack.Screen name={RootScreens.Profile} component={Profile} />
    <Stack.Screen name={RootScreens.Orders} component={Orders} />
  </Stack.Navigator>
);
