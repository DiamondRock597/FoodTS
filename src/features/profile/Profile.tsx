import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {RootScreens, RootStackParamList} from '../../navigation/screens';
import {MenuButton} from './MenuButton';
import {CustomButton} from '../../components/custom_button';

import {styles} from './styles/profile';
import {Menu} from './Menu';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Search>;
  route: RouteProp<RootStackParamList, RootScreens.Search>;
}

export const Profile = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>My profile</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>Personal details</Text>
        </View>
        <View style={styles.personalDetails}>
          <View style={styles.image}></View>
          <View style={styles.personalData}>
            <Text style={styles.name}>Marvis Ighedosa</Text>
            <Text style={styles.textData}>Dosamarvis@gmail.com</Text>
            <Text style={styles.textData}>+234 9011039271</Text>
            <Text style={[styles.textData, styles.lastText]}>No 15 uti street off ovie palace road effurun delta state</Text>
          </View>
        </View>
        <Menu />
      </View>
    </View>
  );
};
