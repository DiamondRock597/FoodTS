import React from 'react';
import {StackActions} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {inject, observer} from 'mobx-react';

import {CustomButton} from '@components/custom_button';
import {RootScreens, RootStackParamList} from '@navigation/screens';
import {Stores} from '@stores/stores';
import {AccountStore} from 'stores/account';

import {styles} from './onboarding';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.OnBoarding>;
  account: AccountStore;
}

@inject(Stores.AccountStore)
@observer
export class OnBoarding extends React.Component<Props> {
  public async componentDidMount() {
    this.props.account.login();
    console.log({data: this.props.account});
  }
  public render() {
    return (
      <SafeAreaView style={styles.bckg}>
        <View style={styles.container}>
          <View style={styles.icon}>
            <Image source={require('../../assets/image/icon.png')} />
          </View>
          <View style={styles.header}>
            <Text style={styles.title}>Food for Everyone</Text>
          </View>
          <View style={styles.imageBlock}>
            <Image source={require('../../assets/image/logo.png')} style={styles.image} />
          </View>
        </View>
        <View style={styles.buttonBlock}>
          <CustomButton
            onPress={() => this.props.navigation.dispatch(StackActions.replace(RootScreens.Register))}
            title="Get started"
            color="#FF460A"
            backgroundColor="white"
          />
        </View>
      </SafeAreaView>
    );
  }
}
