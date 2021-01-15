import React from 'react';
import Animated, {Extrapolate, interpolate} from 'react-native-reanimated';

import {styles} from './styles/dot';

const VALUE_OPACITY = 0.5;
const ACTIVE_VALUE_OPACITY = 1;

interface Props {
  index: number;
  currentIndex: Animated.Node<number>;
}

export const Dot = ({index, currentIndex}: Props) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [VALUE_OPACITY, ACTIVE_VALUE_OPACITY, VALUE_OPACITY],
    extrapolate: Extrapolate.CLAMP,
  });

  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return <Animated.View style={[styles.dot, {transform: [{scale}], opacity}]} />;
};
