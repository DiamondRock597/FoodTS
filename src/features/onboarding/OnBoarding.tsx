import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, Text, View} from 'react-native';

import {CustomButton} from '../../components/custom_button';
import {RootScreens, RootStackParamList} from '../../navigation/screens';

import {styles} from './onboarding';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.OnBoarding>;
}

export const OnBoarding: React.FC<Props> = ({navigation}: Props) => (
  <View style={styles.bckg}>
    <View style={styles.container}>
      <View style={styles.icon}>
        <Image source={require('../../assets/image/icon.png')} />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Food for Everyone</Text>
      </View>
      <View style={styles.imageBlock}>
        <Image source={require('../../assets/image/logo.png')} style={styles.image} />
      </View>
      <View style={styles.buttonBlock}>
        <CustomButton onPress={() => navigation.navigate(RootScreens.Register)} title="Get started" color="#FF460A" backgroundColor="white" />
      </View>
    </View>
  </View>
);
