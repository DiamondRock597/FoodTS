import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, ScaledSize, Dimensions, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import {CustomButton} from '../../components/CustomButton';
import {RootScreens, RootStackParamList} from '../../screens/screens';

import {styles} from './register';

const {height}: ScaledSize = Dimensions.get('screen');

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Register>;
}

interface State {
  login: boolean;
}

export class Register extends React.Component<Props, State> {
  public state: State = {
    login: true,
  };

  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoBlock}>
          <View style={styles.imageBlock}>
            <Image
              style={styles.img}
              source={require('../assets/image/iconX.png')}
            />
          </View>
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
        <View style={styles.form}>
          <View style={styles.inputBlock}>
            <Text style={styles.title}>Email address</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.inputBlock}>
            <Text style={styles.title}>Password</Text>
            <TextInput style={styles.input} />
          </View>
          <Text style={styles.forgotPassword}>Forgot passcode?</Text>
          <CustomButton
            onPress={() => console.log(123)}
            title="Login"
            color="white"
            backgroundColor="#FF460A"
          />
        </View>
      </View>
    );
  }

  private handlePress: () => void = () => {
    this.setState({login: !this.state.login});
  };
}
