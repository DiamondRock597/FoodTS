import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from 'react-native-splash-screen';
import {MainNavigation} from './src/navigation/MainNavigation';

export class App extends React.Component {
  public componentDidMount() {
    SplashScreen.hide();
  }
  public render() {
    return (
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    );
  }
}
