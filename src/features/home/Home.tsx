import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import {styles} from './styles/styles';

export const Home = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={require('../../assets/image/Vector.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../../assets/image/orders.png')} />
      </TouchableOpacity>
    </View>
  </View>
);
