import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';

import {Menu} from './Menu';
import {User as UserModel} from '@models/user';
import Profile from '@assets/image/profile.png';
import {RootScreens, RootStackParamList} from '@navigation/screens';

import {styles} from './styles/info';

interface Props {
  onPress: () => void;
  navigate: (screen: RootScreens) => void;
}

const user: UserModel = {
  name: 'Marvis Ighedosa',
  email: 'Dosamarvis@gmail.com',
  phoneNumber: '+234 9011039271',
  info: 'No 15 uti street off ovie palace road effurun delta state',
  image: Profile,
};

export const Info: React.FC<Props> = ({onPress, navigate}: Props) => (
  <ScrollView style={styles.container}>
    <View>
      <Text style={styles.headerTitle}>My profile</Text>
    </View>
    <View style={styles.content}>
      <View style={styles.contentTitle}>
        <Text style={styles.title}>Personal details</Text>
      </View>
      <View style={styles.personalDetails}>
        <Image source={user.image} style={styles.image} />
        <View style={styles.personalData}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.textData}>{user.email}</Text>
          <Text style={styles.textData}>{user.phoneNumber}</Text>
          <Text style={[styles.textData, styles.lastText]}>{user.info}</Text>
        </View>
      </View>
      <Menu onPress={onPress} handleNavigate={navigate} />
    </View>
  </ScrollView>
);
