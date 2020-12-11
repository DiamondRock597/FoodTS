import React from 'react';
import {View, Text, Image} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import BankIcon from '@assets/image/bank.png';
import CardIcon from '@assets/image/credit_card.png';
import PaypalIcon from '@assets/image/paypal.png';

import {styles} from './styles/method';

export enum Methods {
  Card = 'Card',
  Bank = 'Bank account',
  Paypal = 'Paypal',
}

const methods = [
  {id: 1, name: Methods.Card, image: BankIcon, background: '#F47B0A'},
  {id: 2, name: Methods.Bank, image: CardIcon, background: '#EB4796'},
  {id: 3, name: Methods.Paypal, image: PaypalIcon, background: '#0038FF'},
];

interface Props {
  activeMethod: Methods;
  onPress: (name: Methods) => void;
}

export const Method: React.FC<Props> = ({onPress, activeMethod}: Props) => (
  <>
    {methods.map((item) => (
      <RectButton key={`Method-${item.id}`} style={styles.methodBlock} onPress={() => onPress(item.name)}>
        <View style={styles.radioButton}>{activeMethod === item.name ? <View style={styles.activeButton} /> : null}</View>

        <View style={styles.titleBlock}>
          <View style={[styles.imageBackground, {backgroundColor: item.background}]}>
            <Image source={item.image} />
          </View>
        </View>
        <Text style={styles.titleMethod}>{item.name}</Text>
      </RectButton>
    ))}
  </>
);
