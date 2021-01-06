import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootScreens, RootStackParamList} from 'navigation/screens';

import {ChangeProfile} from './ChangeProfile';
import {Info} from './Info';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Profile>;
}

export const Profile: React.FC<Props> = ({navigation}) => {
  const [changeMode, setChangeMode] = useState<boolean>(false);

  const changeModeHandler: () => void = () => {
    setChangeMode(!changeMode);
  };

  return !changeMode ? (
    <Info onPress={changeModeHandler} navigate={(screen: RootScreens) => navigation.navigate(screen)} />
  ) : (
    <ChangeProfile onPress={changeModeHandler} />
  );
};
