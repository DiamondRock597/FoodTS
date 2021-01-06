import React, {useRef} from 'react';
import {View, TouchableOpacity, Image, Dimensions, ScaledSize, Text, ScrollView} from 'react-native';
import Animated, {divide} from 'react-native-reanimated';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import {RouteProp} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useScrollHandler} from 'react-native-redash';
import {inject, observer} from 'mobx-react';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList, RootScreens} from '@navigation/screens';
import {CustomButton} from '@components/custom_button';
import {Stores} from '@stores/stores';
import {Dot} from './Dot';

import {styles} from './styles/dish';
import {FoodsStore} from 'stores/foods';

const {width}: ScaledSize = Dimensions.get('window');

interface Props {
  route: RouteProp<RootStackParamList, RootScreens.Dish>;
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Dish>;
  dish: FoodsStore;
}

export const Dish = inject(Stores.DishStore)(
  observer(({navigation, route, dish}: Props) => {
    const scroll = useRef<Animated.ScrollView>(null);
    const {scrollHandler, x} = useScrollHandler();

    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
            <BackIcon name="arrow-back-ios" size={24} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dish.addFavourite(route.params.dish.id)} style={styles.backButton}>
            <MaterialCommunityIcons name={route.params.dish.favourite ? 'heart' : 'heart-outline'} size={22} color="red" />
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
            <CustomButton color="#F6F6F9" onPress={() => dish.addInBasket(route.params.dish.id)} backgroundColor="#FA4A0C" title="Add to Cart" />
          </View>
        </View>
      </ScrollView>
    );
  }),
);
