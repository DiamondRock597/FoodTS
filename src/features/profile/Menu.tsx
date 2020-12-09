import React from 'react';
import {View} from 'react-native';

import {CustomButton} from '@components/custom_button';
import {MenuButton} from './MenuButton';

import {styles} from './styles/profile';

export const Menu: React.FC = () => {
  return (
    <View style={{justifyContent: 'space-between', paddingTop: 20, flexDirection: 'column'}}>
      <MenuButton title="Orders" />
      <MenuButton title="Pending reviews" />
      <MenuButton title="Faq" />
      <MenuButton title="Help" />
      <View>
        <CustomButton title="Change" color="#F6F6F9" backgroundColor="#FA4A0C" onPress={() => console.log(123)} />
      </View>
    </View>
  );
};
