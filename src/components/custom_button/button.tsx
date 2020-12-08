import React from 'react';
import {StyleProp, Text, ViewStyle} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {styles} from './styles';

interface Props {
  onPress: () => void;
  title: string;
  color: string;
  backgroundColor: string;
  style?: StyleProp<ViewStyle>;
}

export const CustomButton: React.FC<Props> = ({onPress, title, color, backgroundColor, style}: Props) => (
  <RectButton style={[styles.container, {backgroundColor}]} onPress={onPress}>
    <Text style={{...styles.text, color}}>{title}</Text>
  </RectButton>
);
