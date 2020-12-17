import React from 'react';
import {View, Text, Image, ListRenderItemInfo, TouchableOpacity, ImageProps, Dimensions} from 'react-native';
import {RowMap, SwipeListView} from 'react-native-swipe-list-view';
import SwipeIcon from 'react-native-vector-icons/MaterialIcons';
import HeartIcon from 'react-native-vector-icons/FontAwesome5';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootScreens, RootStackParamList} from 'navigation/screens';
import {RouteProp} from '@react-navigation/native';
import SwipeableItem, {OverlayParams, RenderUnderlay, UnderlayParams} from 'react-native-swipeable-item';

import {Counter} from './Counter';
import {CustomButton} from 'components/custom_button';
import Food1 from '@assets/image/food.png';
import Food2 from '@assets/image/food2.png';
import Food3 from '@assets/image/food3.png';

import {styles} from './styles/orders';
import Animated, {multiply} from 'react-native-reanimated';
import {FlatList} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

interface Item {
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
          <SwipeIcon name="swipe" size={14} />
          <Text style={styles.infoSwipe}>swipe on an item to delete</Text>
        </View>
      </>
    );
  }
  private get swipebleOptions() {
    return {
      renderUnderlayLeft: this.renderHiddenItem,
      snapPointsLeft: [OPEN_SWIPE_VALUE],
    };
  }

  public render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.carts}
          ListHeaderComponent={this.ListHeaderComponent}
          renderItem={this.renderItem}
          style={{flex: 1, width}}
          showsVerticalScrollIndicator={false}
        />

        <View style={styles.acceptBlock}>
          <View style={styles.acceptButton}>
            <CustomButton title="Complete order" color="#F6F6F9" backgroundColor="#FA4A0C" />
          </View>
        </View>
      </View>
    );
  }

  private keyExtractor = (item: Item) => `${item.id}`;

  private renderHiddenItem = ({percentOpen}: UnderlayParams<Item>) => (
    <Animated.View style={[styles.swipeButtonsBlock, {opacity: percentOpen}]}>
      <TouchableOpacity style={styles.swipeButton}>
        <HeartIcon name="heart" size={16} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.swipeButton}>
        <HeartIcon name="trash" size={16} color="white" />
      </TouchableOpacity>
    </Animated.View>
  );

  private renderItem = ({item}: ListRenderItemInfo<Item>) => (
    <View style={{alignItems: 'center'}}>
      <SwipeableItem renderOverlay={this.renderOverlayItem} key={this.keyExtractor(item)} item={item} {...this.swipebleOptions} />
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

  private onDelete = (rowMap: RowMap<Item>, rowKey: number) => {
    this.closeRow(rowMap, rowKey);
    const newArr = this.state.carts.filter((item) => item.id !== rowKey);
    this.setState({carts: newArr});
  };

  private closeRow = (rowMap: RowMap<Item>, rowKey: number) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };
}
