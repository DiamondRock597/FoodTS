import React from 'react';
import {View, Text, Image, ListRenderItemInfo, ImageProps, Dimensions} from 'react-native';
import SwipeIconHeader from 'react-native-vector-icons/MaterialIcons';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootScreens, RootStackParamList} from 'navigation/screens';
import {RouteProp} from '@react-navigation/native';
import SwipeableItem, {OverlayParams, UnderlayParams} from 'react-native-swipeable-item';
import Animated from 'react-native-reanimated';
import {FlatList} from 'react-native-gesture-handler';

import {Counter} from './Counter';
import {SwipeIcon} from './SwipeIcon';
import {CustomButton} from '@components/custom_button';
import Food1 from '@assets/image/food.png';
import Food2 from '@assets/image/food2.png';
import Food3 from '@assets/image/food3.png';

import {styles} from './styles/orders';

export interface Item {
  id: number;
  name: string;
  image: ImageProps;
}

interface State {
  carts: Array<Item>;
}
interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Orders>;
  route: RouteProp<RootStackParamList, RootScreens.Orders>;
}

interface State {
  carts: Array<Item>;
}

const OPEN_SWIPE_VALUE = 125;

export class Orders extends React.Component<Props, State> {
  public state: State = {
    carts: [
      {id: 1, name: '1 cart', image: Food1},
      {id: 2, name: '1 cart', image: Food2},
      {id: 3, name: '1 cart', image: Food3},
      {id: 4, name: '1 cart', image: Food1},
      {id: 5, name: '1 cart', image: Food2},
      {id: 6, name: '1 cart', image: Food3},
    ],
  };

  private get ListHeaderComponent() {
    return (
      <>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Cart</Text>
        </View>
        <View style={styles.info}>
          <SwipeIconHeader name="swipe" size={14} />
          <Text style={styles.infoSwipe}>swipe on an item to delete</Text>
        </View>
      </>
    );
  }

  public render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.carts}
          ListHeaderComponent={this.ListHeaderComponent}
          renderItem={this.renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        />
        <View style={styles.acceptBlock}>
          <CustomButton title="Complete order" color="#F6F6F9" backgroundColor="#FA4A0C" />
        </View>
      </View>
    );
  }

  private keyExtractor = (item: Item) => `Dish-${item.id}`;

  private renderHiddenItem = (swipeItem: UnderlayParams<Item>) => (
    <Animated.View style={[styles.row, {opacity: swipeItem.percentOpen}]}>
      <View style={styles.swipeButtonsBlock}>
        <SwipeIcon id={swipeItem.item.id} name="heart" onPress={this.onDelete} close={swipeItem.close} percentOpen={swipeItem.percentOpen} />
        <SwipeIcon id={swipeItem.item.id} name="trash" onPress={this.onDelete} close={swipeItem.close} percentOpen={swipeItem.percentOpen} />
      </View>
    </Animated.View>
  );

  private renderItem = ({item}: ListRenderItemInfo<Item>) => (
    <View style={styles.flatRow}>
      <SwipeableItem
        snapPointsLeft={[OPEN_SWIPE_VALUE]}
        renderUnderlayLeft={this.renderHiddenItem}
        renderOverlay={this.renderOverlayItem}
        key={this.keyExtractor(item)}
        item={item}
      />
    </View>
  );

  private renderOverlayItem = ({item}: OverlayParams<Item>) => (
    <View style={styles.swipeBlock} key={item.id}>
      <View style={styles.imageBlock}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.cartInfo}>
        <Text style={styles.cartName}>Veggie tomato mix</Text>
        <View style={styles.counterBlock}>
          <Text style={styles.cartCost}>#1,900</Text>
          <Counter />
        </View>
      </View>
    </View>
  );

  private onDelete = ({id, close}: {id: number; close: () => Promise<void>}) => {
    close();
    const newArr = this.state.carts.filter((swipeItem) => swipeItem.id !== id);
    this.setState({carts: newArr});
  };
}
