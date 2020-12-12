import React from 'react';
import {View, Text, Image} from 'react-native';
import {RowMap, SwipeListView} from 'react-native-swipe-list-view';
import SwipeIcon from 'react-native-vector-icons/MaterialIcons';

import {Counter} from './Counter';

import {styles} from './styles/orders';

interface State {
  carts: Array<Item>;
}

interface Item {
  id: number;
  name: string;
}

export class Orders extends React.Component<null, State> {
  public state: State = {
    carts: [{id: 1, name: '1 cart'}],
  };

  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Cart</Text>
        </View>
        <View style={styles.info}>
          <SwipeIcon name="swipe" size={14} />
          <Text style={styles.infoSwipe}>swipe on an item to delete</Text>
        </View>
        <View>
          <SwipeListView
            contentContainerStyle={styles.swipeContentContainer}
            data={this.state.carts}
            renderHiddenItem={this.renderHiddenItem}
            leftOpenValue={100}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }

  private renderHiddenItem = (data, rowMap: RowMap<Item>) => (
    <View>
      <Text>Right</Text>
    </View>
  );

  private renderItem = (item: Item, rowMap) => (
    <View style={styles.swipeBlock} key={item.id}>
      <View style={styles.imageBlock}>
        <Image source={require('@assets/image/food.png')} style={styles.image} />
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
}
