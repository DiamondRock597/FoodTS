import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {TypesDish} from '../../models/dish';

import {styles} from './styles/type_food';

interface Props {
  name: TypesDish;
  active?: boolean;
  onPress: (type: TypesDish) => void;
}

export const TypeFood: React.FC<Props> = ({name, active, onPress}: Props) => (
  <TouchableOpacity onPress={() => onPress(name)} style={[styles.foodsItem, active && styles.activeFoodsItem]}>
    <Text style={[styles.titleFoods, active && styles.activeTitleFoods]}>{name}</Text>
  </TouchableOpacity>
);
