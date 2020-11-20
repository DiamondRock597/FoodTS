import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {MainNavigation} from './src/navigation/MainNavigation';

export const App = () => (
  <NavigationContainer>
    <MainNavigation />
  </NavigationContainer>
);
