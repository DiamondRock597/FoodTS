import React from 'react';
import {RootScreens, RootStackParamList} from '@navigation/screens';
import {Text, TouchableOpacity} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import BackIcon from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles/menu_button';

interface Props {
  title: RootScreens | string;
  onPress?: (screen: RootScreens, params?: RootStackParamList) => void;
}

export const MenuButton: React.FC<Props> = ({title, onPress}: Props) => (
  <RectButton onPress={() => onPress(title)} style={styles.container}>
    <Text style={styles.text}>{title}</Text>
    <TouchableOpacity>
      <BackIcon name="arrow-forward-ios" size={24} color="#000000" />
    </TouchableOpacity>
  </RectButton>
);
