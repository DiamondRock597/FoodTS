import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {RootScreens} from '@navigation/screens';
import {inject, observer} from 'mobx-react';

import {Menu} from './Menu';
import {Stores} from '@stores/stores';
import {AccountStore} from '@stores/account';

import {styles} from './styles/info';

interface Props {
  onPress: () => void;
  navigate: (screen: RootScreens) => void;
  account: AccountStore;
}

@inject(Stores.AccountStore)
@observer
export class Info extends React.Component<Props> {
  public render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.headerTitle}>My profile</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.contentTitle}>
            <Text style={styles.title}>Personal details</Text>
          </View>
          <View style={styles.personalDetails}>
            <Image source={{uri: this.props.account.profileImage}} style={styles.image} />
            <View style={styles.personalData}>
              <Text style={styles.name}>{this.props.account.userName}</Text>
              <Text style={styles.textData}>{this.props.account.emailAddres}</Text>
              <Text style={styles.textData}>{this.props.account.userPhoneNumber}</Text>
              <Text style={[styles.textData, styles.lastText]}>{this.props.account.information}</Text>
            </View>
          </View>
          <Menu onPress={this.props.onPress} handleNavigate={this.props.navigate} />
        </View>
      </ScrollView>
    );
  }
}
