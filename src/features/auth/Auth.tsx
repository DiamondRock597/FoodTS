import React, {useRef} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, ScaledSize, Dimensions, Alert} from 'react-native';
import {useScrollHandler} from 'react-native-redash';
import Animated from 'react-native-reanimated';
import {inject, observer} from 'mobx-react';

import {LogoBlock} from './LogoBlock';
import {AuthForm} from './AuthForm';
import {SignUp} from './SignUp';
import {RootScreens, RootStackParamList} from '@navigation/screens';
import {Stores, StoresMethods} from '@stores/stores';
import {AccountStore} from '@stores/account';
import {startPositionHover, finishPositionHover} from './styles/logo_block';

import {styles} from './styles/auth';

const {width, height}: ScaledSize = Dimensions.get('window');

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Register>;
  account: AccountStore;
  cleanStores: () => void;
}

export const Auth = inject(
  Stores.AccountStore,
  StoresMethods.CleanStores,
)(
  observer(({account, navigation, cleanStores}: Props) => {
    cleanStores();

    const scroll = useRef<Animated.ScrollView>(null);
    const {scrollHandler, x} = useScrollHandler();

    const onNavigate = async (email: string, password: string) => {
      await account.signIn(email, password);
      navigateAccount();
    };

    const navigateAccount = () => {
      if (account.isLogin) {
        navigation.replace(RootScreens.Home);
      } else {
        Alert.alert(account.errorMessage);
      }
    };

    const onPressLogin = () => scroll.current?.getNode().scrollTo({x: startPositionHover});
    const onPressSignUp = () => scroll.current?.getNode().scrollTo({x: finishPositionHover});

    return (
      <View style={styles.container}>
        <LogoBlock onPressLogin={onPressLogin} onPressSignUp={onPressSignUp} x={x} />

        <Animated.ScrollView
          ref={scroll}
          horizontal
          scrollEnabled={false}
          contentContainerStyle={styles.scroll}
          showsHorizontalScrollIndicator={false}
          style={{width, height}}
          keyboardShouldPersistTaps="handled"
          {...scrollHandler}>
          <AuthForm onSubmit={onNavigate} />
          <SignUp />
        </Animated.ScrollView>
      </View>
    );
  }),
);
