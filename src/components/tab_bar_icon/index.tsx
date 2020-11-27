import React from 'react';
import {Image} from 'react-native';

import {TabScreens} from '../../navigation/screens';
import HomeIcon from '../../assets/image/home_icon.png';

const imageMap = {
  [TabScreens.Home]: HomeIcon,
};

interface Props {
  tab: TabScreens;
  tintColor: string;
}

export const TabBarIcon: React.FC<Props> = ({tab, tintColor}: Props) => {
  return <Image source={imageMap[tab]} style={{tintColor}} />;
};
