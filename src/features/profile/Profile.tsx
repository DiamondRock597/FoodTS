import React, {useState} from 'react';

import {ChangeProfile} from './ChangeProfile';
import {Info} from './Info';

export const Profile = () => {
  const [changeMode, setChangeMode] = useState<boolean>(false);

  const changeModeHandler: () => void = () => {
    setChangeMode(!changeMode);
  };

  return !changeMode ? <Info onPress={changeModeHandler} /> : <ChangeProfile onPress={changeModeHandler} />;
};
