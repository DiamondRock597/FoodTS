import React from 'react';
import {View, Text} from 'react-native';
import Animated, {Extrapolate, interpolate} from 'react-native-reanimated';

import {styles} from './styles/dot';

interface Props {
  index: number;
  currentIndex: Animated.Node<number>;
}

export const Dot = ({index, currentIndex}: Props) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });

  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return <Animated.View style={[styles.dot, {transform: [{scale}], opacity}]} />;
};
