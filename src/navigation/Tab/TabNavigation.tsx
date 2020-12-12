import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabScreens} from '../screens';
import {Home} from '@features/home/Home';
import {Orders} from '@features/orders/Orders';
import {TabBarIcon} from '@components/tab_bar_icon';
import {Profile} from '@features/profile/Profile';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: {backgroundColor: '#F2F2F2', borderWidth: 0, elevation: 0},
      showLabel: false,
      activeTintColor: '#FA4A0C',
      inactiveTintColor: '#B1B1B3',
    }}>
    <Tab.Screen
      name={TabScreens.Home}
      component={Home}
      options={{
        tabBarIcon: ({color}: {color: string}) => <TabBarIcon tab={TabScreens.Home} tintColor={color} />,
      }}
    />
    <Tab.Screen
      name={TabScreens.Orders}
      component={Orders}
      options={{
        tabBarIcon: ({color}: {color: string}) => <TabBarIcon tab={TabScreens.Orders} tintColor={color} />,
      }}
    />
    <Tab.Screen
      name={TabScreens.Profile}
      component={Profile}
      options={{
        tabBarIcon: ({color}: {color: string}) => <TabBarIcon tab={TabScreens.Profile} tintColor={color} />,
      }}
    />
    <Tab.Screen
      name={TabScreens.History}
      component={Home}
      options={{
        tabBarIcon: ({color}: {color: string}) => <TabBarIcon tab={TabScreens.History} tintColor={color} />,
      }}
    />
  </Tab.Navigator>
);
