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
  <TouchableOpacity onPress={() => onPress(id)} style={[styles.foodsItem, active && styles.activeFoodsItem]}>
    <Text style={[styles.titleFoods, active && styles.activeTitleFoods]}>{name}</Text>
  </TouchableOpacity>
);
