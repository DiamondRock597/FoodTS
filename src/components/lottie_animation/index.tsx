import React from 'react';
import {View} from 'react-native';
import LottieAnimation from 'lottie-react-native';

import FoodAnimation from '@assets/lottie/food.json';

import {styles} from './styles';

export const Lottie = () => (
  <View style={styles.blockAnimation}>
    <LottieAnimation source={FoodAnimation} autoPlay style={styles.lottieAnimation} />
  </View>
);
