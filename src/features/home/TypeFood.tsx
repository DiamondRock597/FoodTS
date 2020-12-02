import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from './styles/type_food';

interface Props {
  id: number;
  name: string;
  active?: boolean;
  onPress: (id: number) => void;
}

export const TypeFood: React.FC<Props> = ({name, active, onPress, id}: Props) => (
  <TouchableOpacity
    onPress={() => onPress(id)}
    style={[styles.foodsItem, active ? {borderBottomWidth: 3, borderColor: '#FA4A0C'} : {borderWidth: 0, borderColor: '#9A9A9D'}]}>
    <Text style={[styles.titleFoods, active && {color: '#FA4A0C'}]}>{name}</Text>
  </TouchableOpacity>
);
