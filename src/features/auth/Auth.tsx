import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, ScaledSize, Dimensions, Image, BackHandler, KeyboardAvoidingView} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {useScrollHandler} from 'react-native-redash';
import Animated from 'react-native-reanimated';

import {CustomButton} from '../../components/custom_button';
import {RootScreens, RootStackParamList} from '../../navigation/screens';

import {styles} from './styles/auth';

const {width, height}: ScaledSize = Dimensions.get('window');

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Register>;
}

interface State {
  login: boolean;
}

export class Auth extends React.Component<Props, State> {
  public state: State = {
    login: true,
  };

  private scrollView: React.RefObject<Animated.ScrollView> = React.createRef<Animated.ScrollView>();

  public componentDidMount() {
    this.props.navigation.addListener('beforeRemove', (e) => e.preventDefault());
  }

  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoBlock}>
          <View style={styles.imageBlock}>
            <Image style={styles.img} source={require('../../assets/image/iconX.png')} />
          </View>
          <View style={styles.menuBlock}>
            <Text onPress={this.handlePress} style={styles.login}>
              Login
            </Text>
            <Text onPress={this.handlePress} style={styles.login}>
              Sign-up
            </Text>
            <Animated.View
              style={{height: 3, backgroundColor: 'red', width: 134, position: 'absolute', bottom: 0, left: this.state.x}}></Animated.View>
          </View>
        </View>
        <KeyboardAvoidingView enabled behavior="height">
          <Animated.ScrollView
            scrollEnabled={false}
            ref={this.scrollView}
            horizontal
            contentContainerStyle={styles.scroll}
            showsHorizontalScrollIndicator={false}
            style={{width, height}}
            keyboardShouldPersistTaps="handled">
            <View style={styles.form}>
              <View style={styles.inputBlock}>
                <Text style={styles.title}>Email address</Text>
                <TextInput style={styles.input} autoCompleteType="email" />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.title}>Password</Text>
                <TextInput secureTextEntry style={styles.input} autoCompleteType="password" />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.forgotPassword}>Forgot passcode?</Text>
                <CustomButton onPress={() => console.log(123)} title="Login" color="white" backgroundColor="#FF460A" />
              </View>
            </View>
            <View style={styles.form}>
              <View style={styles.inputBlock}>
                <Text style={styles.title}>Email address</Text>
                <TextInput style={styles.input} />
              </View>
            </View>
          </Animated.ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }

  private handlePress: () => void = () => {
    this.setState({login: !this.state.login});

    const {scrollHandler, x} = useScrollHandler();

    this.scrollView.current?.scrollTo({x: this.state.login ? width : 0, animated: true});
  };
}
