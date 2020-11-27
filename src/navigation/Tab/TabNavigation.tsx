import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabScreens} from '../screens';
import {Home} from '../../features/home/Home';
import {TabBarIcon} from '../../components/tab_bar_icon';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => (
  <Tab.Navigator
    sceneContainerStyle={{borderWidth: 0}}
    tabBarOptions={{
      style: {backgroundColor: '#F2F2F2', borderWidth: 0},
      showLabel: false,
      activeTintColor: '#FA4A0C',
      inactiveTintColor: '#B1B1B3',
      tabStyle: {borderWidth: 0},
    }}>
    <Tab.Screen
      name={TabScreens.Home}
      component={Home}
      options={{
        tabBarIcon: ({color}: {color: string}) => <TabBarIcon tab={TabScreens.Home} tintColor={color} />,
      }}
    />
    <Tab.Screen
      name={TabScreens.Profile}
      component={Home}
      options={{
        tabBarIcon: ({color}: {color: string}) => <TabBarIcon tab={TabScreens.Home} tintColor={color} />,
      }}
    />
    <Tab.Screen
      name={TabScreens.Orders}
      component={Home}
      options={{
        tabBarIcon: ({color}: {color: string}) => <TabBarIcon tab={TabScreens.Home} tintColor={color} />,
      }}
    />
  </Tab.Navigator>
);
