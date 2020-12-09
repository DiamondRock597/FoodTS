import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import {Menu} from './Menu';
import {ChangeProfile} from './ChangeProfile';

import {styles} from './styles/profile';

interface State {
  changeMode: boolean;
}

export class Profile extends Component<null, State> {
  public state: State = {
    changeMode: false,
  };

  public render() {
    return !this.state.changeMode ? (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.headerTitle}>My profile</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.contentTitle}>
            <Text style={styles.title}>Personal details</Text>
          </View>
          <View style={styles.personalDetails}>
            <Image source={require('../../assets/image/profile.png')} style={styles.image} />
            <View style={styles.personalData}>
              <Text style={styles.name}>Marvis Ighedosa</Text>
              <Text style={styles.textData}>Dosamarvis@gmail.com</Text>
              <Text style={styles.textData}>+234 9011039271</Text>
              <Text style={[styles.textData, styles.lastText]}>No 15 uti street off ovie palace road effurun delta state</Text>
            </View>
          </View>
          <Menu onPress={this.changeModeHandler} />
        </View>
      </ScrollView>
    ) : (
      <ChangeProfile onPress={this.changeModeHandler} />
    );
  }
  private changeModeHandler: () => void = () => {
    this.setState({changeMode: !this.state.changeMode});
  };
}
