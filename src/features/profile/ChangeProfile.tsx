import React from 'react';
import {View, Text, ScrollView, Image, TextInput} from 'react-native';

import {Method} from './Method';
import {CustomButton} from '@components/custom_button';
import BankIcon from '../../assets/image/bank.png';
import CardIcon from '../../assets/image/credit_card.png';
import PaypalIcon from '../../assets/image/paypal.png';

import {styles} from './styles/change_profile';

export enum Methods {
  Card = 'Card',
  Bank = 'Bank account',
  Paypal = 'Paypal',
}

const methods = [
  {id: 1, name: 'Card', image: BankIcon, background: '#F47B0A'},
  {id: 2, name: 'Bank account', image: CardIcon, background: '#EB4796'},
  {id: 3, name: 'Paypal', image: PaypalIcon, background: '#0038FF'},
];

interface Props {
  onPress: () => void;
}

interface State {
  currentMethod: Methods;
}

export class ChangeProfile extends React.Component<Props> {
  public state: State = {
    currentMethod: Methods.Card,
  };

  public render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.headerTitle}>Change profile</Text>
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
              {methods.map((item) => (
                <Method
                  backgroundColor={item.background}
                  name={item.name}
                  image={item.image}
                  key={item.id}
                  active={this.state.currentMethod === item.name}
                  onPress={this.changeActivePaymentMethod}
                />
              ))}
            </View>
          </View>
          <CustomButton title="Upgrade" color="#F6F6F9" backgroundColor="#FA4A0C" onPress={this.props.onPress} />
        </View>
      </ScrollView>
    );
  }

  private changeActivePaymentMethod: (currentMethod: Methods) => void = (currentMethod) => {
    this.setState({currentMethod});
  };
}
