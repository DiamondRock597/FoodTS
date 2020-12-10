import React from 'react';
import {View} from 'react-native';

import {CustomButton} from '@components/custom_button';
import {MenuButton} from './MenuButton';

interface Props {
  onPress: () => void;
}

export const Menu: React.FC<Props> = ({onPress}: Props) => (
  <View style={{justifyContent: 'space-between', flex: 1, flexDirection: 'column'}}>
    <MenuButton title="Orders" />
    <MenuButton title="Pending reviews" />
    <MenuButton title="Faq" />
    <MenuButton title="Help" />
    <CustomButton title="Change" color="#F6F6F9" backgroundColor="#FA4A0C" onPress={onPress} />
  </View>
);
