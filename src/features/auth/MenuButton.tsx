import React from 'react';
import {Text} from 'react-native';

import {styles} from './styles/menu_button';

interface Props {
  onPress: () => void;
  title: string;
}

export const MunuButton: React.FC<Props> = ({onPress, title}) => (
  <Text onPress={onPress} style={styles.login}>
    {title}
  </Text>
);
