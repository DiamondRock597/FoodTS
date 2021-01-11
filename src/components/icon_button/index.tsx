import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';

interface Props {
  name: string;
  size: number;
  color: string;
  onPress: () => void;
}

export const IconButton: React.FC<Props> = ({name, size, color, onPress}) => (
  <TouchableOpacity style={styles.backButton} onPress={onPress}>
    <Icon name={name} size={size} color={color} />
  </TouchableOpacity>
);
