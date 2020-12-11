import React from 'react';
import {View, Text, Image} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {Method as MethodModel, Methods} from '@models/method';

import {styles} from './styles/method';

interface Props {
  item: MethodModel;
  activeMethod: Methods;
  onPress: (name: Methods) => void;
}

export const Method: React.FC<Props> = ({onPress, activeMethod, item}) => (
  <RectButton style={styles.methodBlock} onPress={() => onPress(item.name)}>
    <View style={styles.radioButton}>{activeMethod === item.name ? <View style={styles.activeButton} /> : null}</View>

    <View style={styles.titleBlock}>
      <View style={[styles.imageBackground, {backgroundColor: item.background}]}>
        <Image source={item.image} />
      </View>
    </View>
    <Text style={styles.titleMethod}>{item.name}</Text>
  </RectButton>
);
