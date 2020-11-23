import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../styles/custombutton';

interface Props {
  onPress: () => void;
}

export const LogoButton: React.FC<Props> = ({onPress}: Props) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>Get started</Text>
  </TouchableOpacity>
);
