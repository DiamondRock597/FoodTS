import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {DishCard} from '@models/dish_card';

import {styles} from './styles/card_of_dish';

interface Props {
  dish: DishCard;
  onPress: (dish: DishCard) => void;
}

export const CardOfDish: React.FC<Props> = ({dish, onPress}: Props) => (
  <TouchableOpacity onPress={() => onPress(dish)} style={styles.dishesItem}>
    <Text numberOfLines={2} style={styles.dishesTitle}>
      {dish.name}
    </Text>
    <Text style={styles.dishesCost}>N{dish.cost}</Text>
    <View style={styles.dishesCircle}>
      <Image source={{uri: dish.image}} style={styles.image} />
    </View>
  </TouchableOpacity>
);
