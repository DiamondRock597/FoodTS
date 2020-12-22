import React from 'react';
import {View, Text, ScrollView, Image, TextInput} from 'react-native';

import {inject, observer} from 'mobx-react';

import {Methods} from '@models/method';
import {Method} from './Method';
import {CustomButton} from '@components/custom_button';
import {Stores} from '@stores/stores';
import {AccountStore} from '@stores/account';
import BankIcon from '@assets/image/bank.png';
import CardIcon from '@assets/image/credit_card.png';
import PaypalIcon from '@assets/image/paypal.png';

import {styles} from './styles/change_profile';

const methods = [
  {id: 1, name: Methods.Card, image: BankIcon, background: '#F47B0A'},
  {id: 2, name: Methods.Bank, image: CardIcon, background: '#EB4796'},
  {id: 3, name: Methods.Paypal, image: PaypalIcon, background: '#0038FF'},
];

interface Props {
  onPress: () => void;
  account: AccountStore;
}

interface State {
  currentMethod: Methods;
  valueName: string;
}

@inject(Stores.AccountStore)
@observer
export class ChangeProfile extends React.Component<Props, State> {
  public state: State = {
    currentMethod: Methods.Card,
    valueName: this.props.account.userName,
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
              <TextInput style={styles.textData} onChangeText={this.handleChangeName} value={this.state.valueName} />
              <TextInput style={styles.textData} multiline value="No 15 uti street off ovie palace road effurun delta state" />
            </View>
          </View>
          <View style={styles.paymentMethods}>
            <View style={styles.methodsTitle}>
              <Text style={styles.title}>Payment Method</Text>
            </View>
            <View style={styles.methods}>
              {methods.map((item) => (
                <Method
                  onPress={this.changeActivePaymentMethods}
                  item={item}
                  active={item.name === this.state.currentMethod}
                  key={`Method-${item.id}`}
                />
              ))}
            </View>
          </View>
          <CustomButton title="Upgrade" color="#F6F6F9" backgroundColor="#FA4A0C" onPress={this.handlePress} />
        </View>
      </ScrollView>
    );
  }

  private changeActivePaymentMethods = (currentMethod: Methods) => {
    this.setState({currentMethod});
  };

  private handlePress = () => {
    this.props.onPress();
    this.props.account.changeName(this.state.valueName);
  };

  private handleChangeName = (name: string) => {
    this.setState({valueName: name});
  };
}
