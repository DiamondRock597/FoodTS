import React from 'react';
import {Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {styles} from '../styles/custombutton';

interface Props {
  onPress: () => void;
  title: string;
  color: string;
  backgroundColor: string;
}

export const CustomButton: React.FC<Props> = ({
  onPress,
  title,
  color,
  backgroundColor,
}: Props) => (
  <RectButton style={{...styles.container, backgroundColor}} onPress={onPress}>
    <Text style={{...styles.text, color}}>{title}</Text>
  </RectButton>
);
