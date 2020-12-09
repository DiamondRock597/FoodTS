import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import BackIcon from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles/menu_button';

interface Props {
  title: string;
}

export const MenuButton: React.FC<Props> = ({title}: Props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{title}</Text>
    <TouchableOpacity>
      <BackIcon name="arrow-forward-ios" size={24} color="#000000" />
    </TouchableOpacity>
  </View>
);
