import {CustomButton} from 'components/custom_button';
import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from '@assets/image/history.png';
import {styles} from './styles/history';
export const History = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>History</Text>
    </View>
    <View style={styles.notificationBlock}>
      <Image source={Icon} />
      <Text style={styles.notificationTitle}>No history yet</Text>
      <Text style={styles.notificationInfo}>Hit the orange button down below to Create an order</Text>
    </View>
    <CustomButton title="Complete order" color="#F6F6F9" backgroundColor="#FA4A0C" onPress={() => console.log(123)} />
  </View>
);
