import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {TabScreens} from '../screens';
import {Home} from '@features/home/Home';
import {CustomDrawerContent} from './CustomDrawerContent';

import {styles} from './styles/drawer';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => (
  <Drawer.Navigator drawerContent={CustomDrawerContent} drawerStyle={styles.container}>
    <Drawer.Screen name={TabScreens.Home} component={Home} />
  </Drawer.Navigator>
);
