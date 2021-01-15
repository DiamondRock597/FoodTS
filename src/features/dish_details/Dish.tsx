import React, {useRef} from 'react';
import {View, Image, Dimensions, ScaledSize, Text, ScrollView} from 'react-native';
import Animated, {divide} from 'react-native-reanimated';
import {RouteProp} from '@react-navigation/native';
import {useScrollHandler} from 'react-native-redash';
import {inject, observer} from 'mobx-react';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList, RootScreens} from '@navigation/screens';
import {CustomButton} from '@components/custom_button';
import {Stores} from '@stores/stores';
import {Dot} from './Dot';
import {FoodsStore} from 'stores/foods';
import {IconButton} from 'features/dish_details/IconButton';

import {styles} from './styles/dish';

const {width}: ScaledSize = Dimensions.get('window');
const indexImages = [0, 1, 2, 3];

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
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.header}>
          <IconButton name="arrow-left" size={24} color="#000000" onPress={() => navigation.goBack()} />
          <IconButton
            name={route.params.dish.favourite ? 'heart' : 'heart-outline'}
            size={22}
            color="red"
            onPress={() => dish.changeFavourite(route.params.dish.id)}
          />
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
            {indexImages.map((_) => (
              <View style={styles.imageItem}>
                <Image source={{uri: route.params.dish.image}} style={styles.image} />
              </View>
            ))}
          </Animated.ScrollView>
          <Animated.View style={styles.dotItem}>
            {indexImages.map((index) => (
              <Dot index={index} currentIndex={divide(x, width)} />
            ))}
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
