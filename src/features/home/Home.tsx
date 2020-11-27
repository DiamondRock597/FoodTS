import React from 'react';
import {View, Image, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {styles} from './styles/styles';

export const Home = () => (
  <ScrollView style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={require('../../assets/image/Vector.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../../assets/image/orders.png')} />
      </TouchableOpacity>
    </View>
    <View style={styles.header}>
      <View>
        <Text numberOfLines={2} style={styles.title}>
          Delicious food for you
        </Text>
        <View style={styles.inputBlock}>
          <Icon name={'search'} size={20} color="#000000" style={styles.search} />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>
      </View>
    </View>
    <ScrollView contentContainerStyle={styles.foods} horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.foodsItem}>
        <Text style={styles.titleFoods}>Foods</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.foodsItem}>
        <Text style={styles.titleFoods}>Drinks</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.foodsItem}>
        <Text style={styles.titleFoods}>Snacks</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.foodsItem}>
        <Text style={styles.titleFoods}>Sauces</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.foodsItem}>
        <Text style={styles.titleFoods}>Pizza</Text>
      </TouchableOpacity>
    </ScrollView>
  </ScrollView>
);
