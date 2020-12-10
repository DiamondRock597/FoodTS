import React from 'react';
import {View, Text, Image, ImageProps} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {styles} from './styles/method';

interface Props {
  active: boolean;
  name: string;
  backgroundColor: string;
  image: ImageProps;
  onPress: (name: string) => void;
}

export const Method: React.FC<Props> = ({active, name, onPress, image, backgroundColor}: Props) => (
  <RectButton style={styles.methodBlock} onPress={() => onPress(name)}>
    <View style={styles.radioButton}>{active ? <View style={styles.activeButton} /> : null}</View>

    <View style={styles.titleBlock}>
      <View style={[styles.imageBackground, {backgroundColor}]}>
        <Image source={image} />
      </View>
    </View>
    <Text style={styles.titleMethod}>{name}</Text>
  </RectButton>
);
