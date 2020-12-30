import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'mobx-react';
import SplashScreen from 'react-native-splash-screen';

import {MainNavigation} from '@navigation/MainNavigation';
import {createRootStore, MainStore, StoresMethods} from '@stores/stores';

interface State {
  hydrated: boolean;
}

export class App extends React.Component {
  public state: State = {
    hydrated: false,
  };
  private mainStore: MainStore = createRootStore();

  public async componentDidMount() {
    await this.mainStore[StoresMethods.LoadStores]();
    this.setState({hydrated: true});
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
