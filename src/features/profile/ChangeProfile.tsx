import React from 'react';
import {View, Text, ScrollView, Image, TextInput} from 'react-native';

import {Method, Methods} from './Method';
import {CustomButton} from '@components/custom_button';

import {styles} from './styles/change_profile';

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
              <TextInput style={styles.textData} multiline value="No 15 uti street off ovie palace road effurun delta state" />
            </View>
          </View>
          <View style={styles.paymentMethods}>
            <View style={styles.methodsTitle}>
              <Text style={styles.title}>Payment Method</Text>
            </View>
            <View style={styles.methods}>
              <Method activeMethod={this.state.currentMethod} onPress={this.changeActivePaymentMethods} />
            </View>
          </View>
          <CustomButton title="Upgrade" color="#F6F6F9" backgroundColor="#FA4A0C" onPress={this.props.onPress} />
        </View>
      </ScrollView>
    );
  }

  private changeActivePaymentMethods = (currentMethod: Methods) => {
    this.setState({currentMethod});
  };
}
