import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from './styles/counter_button';

interface Props {
  onPress: () => void;
  title: string;
}

export const CounterButton: React.FC<Props> = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.counterButton}>
    <Text style={styles.counterText}>{title}</Text>
  </TouchableOpacity>
);
