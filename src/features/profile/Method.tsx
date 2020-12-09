import React from 'react';
import {View, Text, Image, ImageProps} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {styles} from './styles/method';

interface Props {
  active: boolean;
  name: string;
  backgroundColor: string;
  image: ImageProps;
}

export const Method: React.FC<Props> = ({active, name, image, backgroundColor}: Props) => (
  <RectButton style={styles.methodBlock}>
    <View style={styles.radioButton}>{active ? <View style={styles.activeButton} /> : null}</View>

    <View style={styles.titleBlock}>
      <View style={[styles.imageBackground, {backgroundColor}]}>
        <Image source={image} />
      </View>
    </View>
    <Text style={styles.titleMethod}>{name}</Text>
  </RectButton>
);
