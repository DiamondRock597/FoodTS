import React from 'react';
import {View, Text, Image} from 'react-native';

import {CustomButton} from '@components/custom_button';
import Icon from '@assets/image/basket.png';

import {styles} from './styles/empty_orders';

export const EmptyOrders = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Orders</Text>
    </View>
    <View style={styles.notificationBlock}>
      <Image source={Icon} />
      <Text style={styles.notificationTitle}>No orders yet</Text>
      <Text style={styles.notificationInfo}>Hit the orange button down below to Create an order</Text>
    </View>
    <CustomButton title="Complete order" color="#F6F6F9" backgroundColor="#FA4A0C" onPress={() => console.log(123)} />
  </View>
);
