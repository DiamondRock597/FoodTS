import React from 'react';
import {View, Text, Image, ListRenderItemInfo, TouchableOpacity, ImageProps} from 'react-native';
import {RowMap, SwipeListView} from 'react-native-swipe-list-view';
import SwipeIcon from 'react-native-vector-icons/MaterialIcons';
import HeartIcon from 'react-native-vector-icons/FontAwesome5';

import {Counter} from './Counter';
import {CustomButton} from 'components/custom_button';
import Food1 from '@assets/image/food.png';
import Food2 from '@assets/image/food2.png';
import Food3 from '@assets/image/food3.png';
import {styles} from './styles/orders';

interface State {
  carts: Array<Item>;
}
interface Props {}

interface Item {
  id: number;
  name: string;
  image: ImageProps;
}

const OPEN_SWIPE_VALUE = -125;

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
          ListFooterComponent={this.ListFooterComponent}
          showsVerticalScrollIndicator={false}
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

  private get ListFooterComponent() {
    return (
      <View style={styles.acceptButton}>
        <CustomButton title="Complete order" color="#F6F6F9" backgroundColor="#FA4A0C" onPress={() => console.log(123)} />
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
        <Image source={rowData.item.image} style={styles.image} />
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
