import React from 'react';
import {View} from 'react-native';

import {CustomButton} from '@components/custom_button';
import {MenuButton} from './MenuButton';
import {RootScreens, RootStackParamList} from '@navigation/screens';

import {styles} from './styles/menu';

interface Props {
  onPress: () => void;
  handleNavigate: (screen: RootScreens, params?: RootStackParamList) => void;
}

export const Menu: React.FC<Props> = ({onPress, handleNavigate}) => (
  <View style={styles.container}>
    <MenuButton title="Orders" onPress={handleNavigate} />
    <MenuButton title="Pending reviews" />
    <MenuButton title="Faq" />
    <MenuButton title="Help" />
    <CustomButton title="Change" color="#F6F6F9" backgroundColor="#FA4A0C" onPress={onPress} />
  </View>
);
