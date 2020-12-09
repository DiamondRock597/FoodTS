import React from 'react';
import {View, Text, ScrollView, Image, TextInput} from 'react-native';

import {Method} from './Method';
import {CustomButton} from '@components/custom_button';
import Bank from '../../assets/image/bank.png';
import Card from '../../assets/image/credit_card.png';
import Paypal from '../../assets/image/paypal.png';

import {styles} from './styles/change_profile';

const methods = [
  {id: 1, name: 'Card', image: Card, active: true, background: '#F47B0A'},
  {id: 2, name: 'Bank account', image: Bank, active: false, background: '#EB4796'},
  {id: 3, name: 'Paypal', image: Paypal, active: false, background: '#0038FF'},
];

interface Props {
  onPress: () => void;
}

export const ChangeProfile: React.FC<Props> = ({onPress}: Props) => (
  <ScrollView style={styles.container}>
    <View>
      <Text style={styles.headerTitle}>My profile</Text>
    </View>
    <View style={styles.content}>
      <View style={styles.contentTitle}>
        <Text style={styles.title}>Information</Text>
      </View>
      <View style={styles.personalDetails}>
        <Image source={require('../../assets/image/profile.png')} style={styles.image} />
        <View style={styles.personalData}>
          <Text style={styles.name}>Marvis Ighedosa</Text>
          <TextInput style={styles.textData} value="Dosamarvis@gmail.com" />
          <Text style={styles.textData}>No 15 uti street off ovie palace road effurun delta state</Text>
        </View>
      </View>
      <View style={styles.paymentMethods}>
        <View style={styles.methodsTitle}>
          <Text style={styles.title}>Payment Method</Text>
        </View>
        <View style={styles.methods}>
          {methods.map((method) => (
            <Method name={method.name} image={method.image} key={method.id} backgroundColor={method.background} active={method.active} />
          ))}
        </View>
      </View>
      <CustomButton title="Change" color="#F6F6F9" backgroundColor="#FA4A0C" onPress={onPress} />
    </View>
  </ScrollView>
);
