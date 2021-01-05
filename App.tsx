import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from 'react-native-splash-screen';
import {MainNavigation} from '@navigation/MainNavigation';
import {Lottie} from '@components/lottie_animation';

const LOADING_TIME = 5000;

export class App extends React.Component {
  public state = {
    isLoading: false,
  };

  public async componentDidMount() {
    await SplashScreen.hide();
    await setTimeout(() => {
      this.setState({isLoading: true});
    }, LOADING_TIME);
  }
  public render() {
    return (
      <>
        {this.state.isLoading ? (
          <NavigationContainer>
            <MainNavigation />
          </NavigationContainer>
        ) : (
          <Lottie />
        )}
      </>
    );
  }
}
