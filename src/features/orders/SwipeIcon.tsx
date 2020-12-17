import React from 'react';
import Animated, {multiply} from 'react-native-reanimated';
import {ImageProps} from 'react-native';

import TrashIcon from '@assets/image/trash.png';
import HeartIcon from '@assets/image/heart.png';

import {styles} from './styles/swipe_icon';

const SIZE_BUTTON = 40;
const SIZE_ICON_WIDTH = 14;
const SIZE_ICON_HEIGHT = 16;

const icons: {[key: string]: {image: ImageProps; width: number; height: number}} = {
  ['trash']: {image: TrashIcon, width: SIZE_ICON_WIDTH, height: SIZE_ICON_HEIGHT},
  ['heart']: {image: HeartIcon, width: SIZE_ICON_HEIGHT, height: SIZE_ICON_WIDTH},
};

interface Props {
  id: number;
  onPress: ({id, close}: {id: number; close: () => Promise<void>}) => void;
  name: string;
  close: () => Promise<void>;
  percentOpen: Animated.Node<number>;
}

export const SwipeIcon = ({onPress, close, percentOpen, name, id}: Props) => (
  <Animated.View
    onTouchStart={() => onPress({id, close})}
    style={[
      styles.swipeButton,
      {
        height: multiply(percentOpen, SIZE_BUTTON),
        width: multiply(percentOpen, SIZE_BUTTON),
      },
    ]}>
    <Animated.Image
      source={icons[name].image}
      style={{
        height: multiply(percentOpen, icons[name].height),
        width: multiply(percentOpen, icons[name].width),
      }}
    />
  </Animated.View>
);
