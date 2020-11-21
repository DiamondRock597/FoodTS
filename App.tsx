import React from 'react';

import SplashScreen from 'react-native-splash-screen';
import {OnBoarding} from './android/src/screens/OnBoarding';

class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return <OnBoarding />;
  }
}

export default App;
