import React from 'react';
import {Dimensions, Image, ScaledSize, Text, View} from 'react-native';
import {styles} from '../styles/onboarding';
import AutoHeightImage from 'react-native-auto-height-image';

const {height, width}: ScaledSize = Dimensions.get('screen');

export const Onboarding = () => (
  <View style={styles.bckg}>
    <View style={styles.container}>
      {console.log({height})}
      <View style={styles.icon}>
        <Image source={require('../../public/img/logo.png')} />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Food for Everyone</Text>
      </View>
      <View>
        <Image
          source={require('../../public/img/firstScreen.png')}
          style={styles.image}
        />
        {/* <AutoHeightImage
          source={require('../../public/img/firstScreen.png')}
          width={width}
        /> */}
      </View>
    </View>
  </View>
);
