import React from 'react';
import {View, Image} from 'react-native';
import Animated, {interpolate} from 'react-native-reanimated';

import {MenuButton} from './MenuButton';

import {styles, startPositionHover, finishPositionHover, cardRadius, endToScroll} from './styles/logo_block';

interface Props {
  onPressLogin: () => void;
  onPressSignUp: () => void;
  x: Animated.Node<number>;
}

export const LogoBlock: React.FC<Props> = ({onPressLogin, onPressSignUp, x}) => {
  const left = interpolate(x, {
    inputRange: [startPositionHover, finishPositionHover],
    outputRange: [cardRadius, endToScroll],
  });

  return (
    <View style={styles.logoBlock}>
      <View style={styles.imageBlock}>
        <Image style={styles.img} source={require('@assets/image/iconX.png')} />
      </View>
      <View style={styles.menuBlock}>
        <MenuButton onPress={onPressLogin} title="Login" />
        <MenuButton onPress={onPressSignUp} title="Sign-up" />
      </View>
      <Animated.View style={[styles.hover, {left}]} />
    </View>
  );
};
