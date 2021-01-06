import React, {useRef} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, ScaledSize, Dimensions, Image, KeyboardAvoidingView, Platform, Alert} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {useScrollHandler} from 'react-native-redash';
import Animated, {interpolate} from 'react-native-reanimated';
import {inject, observer} from 'mobx-react';

import {AuthForm} from './AuthForm';
import {RootScreens, RootStackParamList} from '@navigation/screens';
import {Stores} from '@stores/stores';
import {AccountStore} from '@stores/account';

import {styles, cardRadius, endToScroll} from './styles/auth';

const {width, height}: ScaledSize = Dimensions.get('window');

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Register>;
  account: AccountStore;
}

export const Auth = inject(Stores.AccountStore)(
  observer(({navigation, account}: Props) => {
    const scroll = useRef<Animated.ScrollView>(null);
    const {scrollHandler, x} = useScrollHandler();

    const left = interpolate(x, {
      inputRange: [0, width],
      outputRange: [cardRadius, endToScroll],
    });

    const onNavigate = async (email: string, password: string) => {
      await account.signIn(email, password);

      if (account.isLogin) {
        navigation.replace(RootScreens.Home);
      } else {
        Alert.alert('Warning', 'The account not found');
      }
    };

    return (
      <View style={styles.container}>
        <View style={styles.logoBlock}>
          <View style={styles.imageBlock}>
            <Image style={styles.img} source={require('../../assets/image/iconX.png')} />
          </View>
          <View style={styles.menuBlock}>
            <Text onPress={() => scroll.current?.getNode().scrollTo({x: 0})} style={styles.login}>
              Login
            </Text>
            <Text onPress={() => scroll.current?.getNode().scrollTo({x: width})} style={styles.login}>
              Sign-up
            </Text>
          </View>
          <Animated.View style={[styles.hover, {left}]} />
        </View>
        <KeyboardAvoidingView enabled behavior={Platform.select({ios: 'padding', android: 'height'})}>
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
            <ScrollView style={styles.form} contentContainerStyle={styles.contentContainer}>
              <View style={styles.inputBlock}>
                <Text style={styles.title}>Email address</Text>
                <TextInput style={styles.input} />
              </View>
            </ScrollView>
          </Animated.ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }),
);
