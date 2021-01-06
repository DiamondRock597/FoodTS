import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {TabScreens} from '@navigation/screens';

const imageMap = {
  [TabScreens.Home]: 'home',
  [TabScreens.Profile]: 'user',
  [TabScreens.History]: 'history',
  [TabScreens.Favourites]: 'heart',
};

interface Props {
  tab: TabScreens;
  tintColor: string;
}

export const TabBarIcon: React.FC<Props> = ({tab, tintColor}: Props) => <Icon name={imageMap[tab]} size={30} color={tintColor} />;
