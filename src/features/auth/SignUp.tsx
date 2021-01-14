import React from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';

import {styles} from './styles/sign_up';

export const SignUp = () => (
  <ScrollView style={styles.form} contentContainerStyle={styles.contentContainer}>
    <View style={styles.inputBlock}>
      <Text style={styles.title}>Email address</Text>
      <TextInput style={styles.input} />
    </View>
  </ScrollView>
);
