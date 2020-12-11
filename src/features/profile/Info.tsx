import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';

import {Menu} from './Menu';

import {styles} from './styles/info';

interface Props {
  onPress: () => void;
}

export const Info: React.FC<Props> = ({onPress}: Props) => (
  <ScrollView style={styles.container}>
    <View>
      <Text style={styles.headerTitle}>My profile</Text>
    </View>
    <View style={styles.content}>
      <View style={styles.contentTitle}>
        <Text style={styles.title}>Personal details</Text>
      </View>
      <View style={styles.personalDetails}>
        <Image source={require('@assets/image/profile.png')} style={styles.image} />
        <View style={styles.personalData}>
          <Text style={styles.name}>Marvis Ighedosa</Text>
          <Text style={styles.textData}>Dosamarvis@gmail.com</Text>
          <Text style={styles.textData}>+234 9011039271</Text>
          <Text style={[styles.textData, styles.lastText]}>No 15 uti street off ovie palace road effurun delta state</Text>
        </View>
      </View>
      <Menu onPress={onPress} />
    </View>
  </ScrollView>
);
