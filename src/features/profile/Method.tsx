import React from 'react';
import {View, Text, Image} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {Method as MethodModel, Methods} from '@models/method';

import {styles} from './styles/method';

interface Props {
  item: MethodModel;
  active: boolean;
  onPress: (name: Methods) => void;
}

export const Method: React.FC<Props> = ({onPress, active, item}) => (
  <RectButton style={styles.methodBlock} onPress={() => onPress(item.name)}>
    <View style={styles.radioButton}>{active && <View style={styles.activeButton} />}</View>

    <View style={styles.titleBlock}>
      <View style={[styles.imageBackground, {backgroundColor: item.background}]}>
        <Image source={item.image} />
      </View>
    </View>
    <Text style={styles.titleMethod}>{item.name}</Text>
  </RectButton>
);
