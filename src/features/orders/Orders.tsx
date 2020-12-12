import React from 'react';
import {View, Text, Image, ListRenderItemInfo, TouchableOpacity} from 'react-native';
import {RowMap, SwipeListView} from 'react-native-swipe-list-view';
import SwipeIcon from 'react-native-vector-icons/MaterialIcons';
import HeartIcon from 'react-native-vector-icons/FontAwesome5';

import {Counter} from './Counter';

import {styles} from './styles/orders';

interface State {
  carts: Array<Item>;
}

interface Item {
  id: number;
  name: string;
}

const OPEN_SWIPE_VALUE = -125;

export class Orders extends React.Component<null, State> {
  public state: State = {
    carts: [
      {id: 1, name: '1 cart'},
      {id: 2, name: '1 cart'},
      {id: 3, name: '1 cart'},
    ],
  };

  public get ListHeaderComponent() {
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

  public render() {
    return (
      <View style={styles.container}>
        <SwipeListView
          ListHeaderComponent={this.ListHeaderComponent}
          contentContainerStyle={styles.containerSwipe}
          data={this.state.carts}
          renderHiddenItem={this.renderHiddenItem}
          rightOpenValue={OPEN_SWIPE_VALUE}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }

  private keyExtractor = (item: Item) => `${item.id}`;

  private renderHiddenItem = (rowData: ListRenderItemInfo<Item>, rowMap: RowMap<Item>) => (
    <View style={[styles.swipeButtonsBlock]}>
      <TouchableOpacity onPress={() => this.closeRow(rowMap, rowData.item.id)} style={styles.swipeButton}>
        <HeartIcon name="heart" size={16} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.onDelete(rowMap, rowData.item.id)} style={styles.swipeButton}>
        <HeartIcon name="trash" size={16} color="white" />
      </TouchableOpacity>
    </View>
  );

  private renderItem = (rowData: ListRenderItemInfo<Item>) => (
    <View style={styles.swipeBlock} key={rowData.item.id}>
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
