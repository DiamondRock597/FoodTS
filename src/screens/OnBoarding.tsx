import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, Dimensions, Image, ScaledSize, Text, View} from 'react-native';
import {LogoButton} from '../components/LogoButton';
import {styles} from '../styles/onboarding';
import {RootScreens, RootStackParamList} from './screens';

const {height, width}: ScaledSize = Dimensions.get('window');

const ratio = width / 414;

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.OnBoarding>;
}

export const OnBoarding: React.FC<Props> = ({navigation}: Props) => (
  <View style={styles.bckg}>
    <View style={styles.container}>
      <View style={styles.icon}>
        <Image source={require('../assets/icon.png')} />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Food for Everyone</Text>
      </View>
      <View style={styles.imageBlock}>
        <Image
          source={require('../assets/logo.png')}
          style={{
            width,
            height: 490 * ratio,
            resizeMode: 'stretch',
            position: 'absolute',
            top: 30,
          }}
        />
      </View>
      <View style={{paddingTop: 400 * ratio}}>
        <LogoButton onPress={() => navigation.navigate(RootScreens.Register)} />
      </View>
    </View>
  </View>
);
