import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'mobx-react';
import SplashScreen from 'react-native-splash-screen';

import {MainNavigation} from './src/navigation/MainNavigation';
import {createRootStore, MainStore} from 'stores/stores';

export class App extends React.Component {
  private mainStore: MainStore = createRootStore();

  public componentDidMount() {
    SplashScreen.hide();
  }

  public render() {
    return (
      <Provider {...this.mainStore}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </Provider>
    );
  }
}
