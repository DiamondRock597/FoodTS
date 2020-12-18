import React, {useRef} from 'react';
import {View, TouchableOpacity, Image, Dimensions, ScaledSize, Text, ScrollView} from 'react-native';
import Animated, {divide} from 'react-native-reanimated';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import {RouteProp} from '@react-navigation/native';
import FavouriteIcon from 'react-native-vector-icons/FontAwesome5';
import {useScrollHandler} from 'react-native-redash';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList, RootScreens} from '@navigation/screens';
import {CustomButton} from '@components/custom_button';
import {Dot} from './Dot';

import {styles} from './styles/dish';

const {width}: ScaledSize = Dimensions.get('window');

interface Props {
  route: RouteProp<RootStackParamList, RootScreens.Dish>;
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Dish>;
}

export const Dish = ({route, navigation}: Props) => {
  const scroll = useRef<Animated.ScrollView>(null);
  const {scrollHandler, x} = useScrollHandler();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
          <BackIcon name="arrow-back-ios" size={24} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton}>
          <FavouriteIcon name="heart" size={20} color="#000000" />
        </TouchableOpacity>
      </View>
      <View>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          contentContainerStyle={styles.imageBlock}
          snapToInterval={width}
          bounces={false}
          style={{width}}
          showsHorizontalScrollIndicator={false}
          {...scrollHandler}>
          <View style={styles.imageItem}>
            <Image source={{uri: route.params.dish.image}} style={styles.image} />
          </View>
          <View style={styles.imageItem}>
            <Image source={{uri: route.params.dish.image}} style={styles.image} />
          </View>
          <View style={styles.imageItem}>
            <Image source={{uri: route.params.dish.image}} style={styles.image} />
          </View>
          <View style={styles.imageItem}>
            <Image source={{uri: route.params.dish.image}} style={styles.image} />
          </View>
        </Animated.ScrollView>
        <Animated.View style={styles.dotItem}>
          <Dot index={0} currentIndex={divide(x, width)} />
          <Dot index={1} currentIndex={divide(x, width)} />
          <Dot index={2} currentIndex={divide(x, width)} />
          <Dot index={3} currentIndex={divide(x, width)} />
        </Animated.View>
      </View>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>{route.params.dish.name}</Text>
        <Text style={styles.cost}>N{route.params.dish.cost}</Text>
      </View>
      <View style={styles.description}>
        <View style={styles.infoBlock}>
          <Text style={styles.nameInfo}>Delivery info</Text>
          <Text style={styles.info}>{route.params.dish.info}</Text>
        </View>
        <View>
          <Text style={styles.nameInfo}>Return policy</Text>
          <Text style={styles.info}>{route.params.dish.policy}</Text>
        </View>
        <View style={styles.button}>
          <CustomButton color="#F6F6F9" onPress={() => route.params.onPress(route.params.dish)} backgroundColor="#FA4A0C" title="Add to Cart" />
        </View>
      </View>
    </ScrollView>
  );
};
