import React from 'react';
import {View} from 'react-native';

import {CustomButton} from '@components/custom_button';
import {MenuButton} from './MenuButton';

import {styles} from './styles/profile';

interface Props {
  onPress: () => void;
}

export const Menu: React.FC<Props> = ({onPress}: Props) => (
  <View style={{justifyContent: 'space-between', flexDirection: 'column'}}>
    <View style={{paddingTop: 12}}>
      <MenuButton title="Orders" />
    </View>
    <View style={{paddingTop: 12}}>
      <MenuButton title="Pending reviews" />
    </View>
    <View style={{paddingTop: 12}}>
      <MenuButton title="Faq" />
    </View>
    <View style={{paddingTop: 12}}>
      <MenuButton title="Help" />
    </View>
    <View style={{paddingTop: 15}}>
      <CustomButton title="Change" color="#F6F6F9" backgroundColor="#FA4A0C" onPress={onPress} />
    </View>
  </View>
);
