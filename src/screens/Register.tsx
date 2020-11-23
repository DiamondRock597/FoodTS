import React from 'react';
import {View, Text, ScaledSize, Dimensions} from 'react-native';
import {styles} from '../styles/register';

const {height}: ScaledSize = Dimensions.get('screen');

interface State {
  login: boolean;
}

export class Register extends React.Component<null, State> {
  public state: State = {
    login: true,
  };
  public render() {
    return (
      <View style={styles.container}>
        <View style={{...styles.logoBlock, height: height / 2.5}}>
          <View style={styles.imageBlock}></View>
          <View style={styles.menuBlock}>
            <Text
              onPress={this.handlePress}
              style={this.state.login ? styles.activeLogin : styles.login}>
              Login
            </Text>
            <Text
              onPress={this.handlePress}
              style={!this.state.login ? styles.activeLogin : styles.login}>
              Sign-up
            </Text>
          </View>
        </View>
      </View>
    );
  }

  private handlePress: () => void = () => {
    this.setState({login: !this.state.login});
  };
}
