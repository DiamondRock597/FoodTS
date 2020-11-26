import React from 'react';
import {Image} from 'react-native';

import {TabScreens} from '../../navigation/screens';

const imageMap = {
  [TabScreens.Home]: '../../assets/image/home_icon.png',
};

interface Props {
  typeIcon: TabScreens;
  tintColor: string;
}

export const TabBarIcon: React.FC<Props> = ({typeIcon, tintColor}: Props) => {
  console.log({typeIcon, src: imageMap[typeIcon]});

  return <Image source={require('../../assets/image/home_icon.png')} style={{tintColor}} />;
};
