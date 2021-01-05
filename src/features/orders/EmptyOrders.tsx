import React from 'react';
import {View, Text, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {CustomButton} from '@components/custom_button';
import Icon from '@assets/image/basket.png';
import {RootScreens, RootStackParamList} from '@navigation/screens';

import {styles} from './styles/empty_orders';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Orders>;
}

export const EmptyOrders: React.FC<Props> = ({navigation}) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Orders</Text>
    </View>
    <View style={styles.notificationBlock}>
      <Image source={Icon} />
      <Text style={styles.notificationTitle}>No orders yet</Text>
      <Text style={styles.notificationInfo}>Hit the orange button down below to Create an order</Text>
    </View>
    <CustomButton title="Complete order" color="#F6F6F9" backgroundColor="#FA4A0C" onPress={() => navigation.navigate(RootScreens.Home)} />
  </View>
);
