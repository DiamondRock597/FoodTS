import React from 'react';
import {Dimensions, Image, ScaledSize, Text, View} from 'react-native';
import {styles} from '../styles/onboarding';

const {height, width}: ScaledSize = Dimensions.get('screen');

export const OnBoarding = () => (
  <View style={styles.bckg}>
    <View style={styles.container}>
      <View style={styles.icon}>
        {/* <Image source={require('../assets')} /> */}
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Food for Everyone</Text>
      </View>
      <View>
        {/* <Image
          source={require('../../public/img/firstScreen.png')}
          style={styles.image}
        /> */}
      </View>
    </View>
  </View>
);
