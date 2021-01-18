import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'mobx-react';
import SplashScreen from 'react-native-splash-screen';

import {Lottie} from '@components/lottie_animation';
import {MainNavigation} from '@navigation/MainNavigation';
import {createRootStore, MainStore, StoresMethods} from '@stores/stores';

const LOADING_TIME = 5000;

interface State {
  hydrated: boolean;
}

export class App extends React.Component {
  public state: State = {
    hydrated: false,
  };
  private mainStore: MainStore = createRootStore();

  public async componentDidMount() {
    await this.loadAppData();
  }

  public render() {
    return (
      <>
        {this.state.hydrated ? (
          <Provider {...this.mainStore}>
            <NavigationContainer>
              <MainNavigation />
            </NavigationContainer>
          </Provider>
        ) : (
          <Lottie />
        )}
      </>
    );
  }

  private loadAppData = async () => {
    await this.mainStore[StoresMethods.LoadStores]();
    await SplashScreen.hide();
    await setTimeout(() => {
      this.setState({hydrated: true});
    }, LOADING_TIME);
  };
}
