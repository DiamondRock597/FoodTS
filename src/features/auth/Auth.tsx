import React, {useRef} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, ScaledSize, Dimensions, Image, KeyboardAvoidingView, Platform} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {useScrollHandler} from 'react-native-redash';
import Animated, {interpolate} from 'react-native-reanimated';

import {CustomButton} from '@components/custom_button';
import {RootScreens, RootStackParamList} from '@navigation/screens';

import {styles, cardRadius, endToScroll} from './styles/auth';

const {width, height}: ScaledSize = Dimensions.get('window');

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Register>;
}

export const Auth = ({navigation}: Props) => {
  const scroll = useRef<Animated.ScrollView>(null);
  const {scrollHandler, x} = useScrollHandler();
  const left = interpolate(x, {
    inputRange: [0, width],
    outputRange: [cardRadius, endToScroll],
  });

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
          <ScrollView style={styles.form} contentContainerStyle={styles.contentContainer}>
            <View style={styles.inputBlock}>
              <Text style={styles.title}>Email address</Text>
              <TextInput style={styles.input} autoCompleteType="email" />
            </View>
            <View style={styles.inputBlock}>
              <Text style={styles.title}>Password</Text>
              <TextInput secureTextEntry style={styles.input} autoCompleteType="password" />
            </View>
            <View style={styles.inputBlock}>
              <Text style={styles.forgotPassword}>Forgot passcode?</Text>
              <CustomButton onPress={() => navigation.replace(RootScreens.Home)} title="Login" color="white" backgroundColor="#FF460A" />
            </View>
          </ScrollView>
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
};
