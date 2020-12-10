import React from 'react';
import {View, Text, ScrollView, Image, TextInput, ImageProps} from 'react-native';

import {Method} from './Method';
import {CustomButton} from '@components/custom_button';
import Bank from '../../assets/image/bank.png';
import Card from '../../assets/image/credit_card.png';
import Paypal from '../../assets/image/paypal.png';

import {styles} from './styles/change_profile';

interface MethodModel {
  id: number;
  name: string;
  image: ImageProps;
  active: boolean;
  background: string;
}

const methods = [
  {id: 1, name: 'Card', image: Card, active: true, background: '#F47B0A'},
  {id: 2, name: 'Bank account', image: Bank, active: false, background: '#EB4796'},
  {id: 3, name: 'Paypal', image: Paypal, active: false, background: '#0038FF'},
];

interface Props {
  onPress: () => void;
}

interface State {
  methods: Array<MethodModel>;
}

export class ChangeProfile extends React.Component<Props> {
  public state: State = {
    methods,
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
              {this.state.methods.map((method) => (
                <Method
                  onPress={this.changeActivePaymentMethod}
                  name={method.name}
                  image={method.image}
                  key={method.id}
                  backgroundColor={method.background}
                  active={method.active}
                />
              ))}
            </View>
          </View>
          <CustomButton title="Upgrade" color="#F6F6F9" backgroundColor="#FA4A0C" onPress={this.props.onPress} />
        </View>
      </ScrollView>
    );
  }

  private changeActivePaymentMethod: (name: string) => void = (name) => {
    const newMethods = this.state.methods.map((item) => {
      item.active = item.name === name;

      return item;
    });
    this.setState({methods: newMethods});
  };
}
