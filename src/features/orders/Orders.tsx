import React from 'react';
import {View, Text, Image, ListRenderItemInfo, TouchableOpacity} from 'react-native';
import {RowMap, SwipeListView} from 'react-native-swipe-list-view';
import SwipeIcon from 'react-native-vector-icons/MaterialIcons';
import HeartIcon from 'react-native-vector-icons/FontAwesome5';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootScreens, RootStackParamList} from 'navigation/screens';
import {RouteProp} from '@react-navigation/native';
import {inject, observer} from 'mobx-react';

import {Counter} from './Counter';
import {CustomButton} from 'components/custom_button';
import {Stores} from 'stores/stores';
import {FoodsStore} from 'stores/foods';
import {Dish as DishModel} from 'models/dish';
import {EmptyOrders} from './EmptyOrders';

import {styles} from './styles/orders';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Orders>;
  route: RouteProp<RootStackParamList, RootScreens.Orders>;
  dish: FoodsStore;
}

const OPEN_SWIPE_VALUE = -125;

@inject(Stores.DishStore)
@observer
export class Orders extends React.Component<Props> {
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

  private get ListEmptyComponent() {
    return <EmptyOrders />;
  }

  public render() {
    return this.props.dish.dishesListInBasket.length ? (
      <View style={styles.container}>
        <SwipeListView
          ListHeaderComponent={this.ListHeaderComponent}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.containerSwipe}
          data={this.props.dish.dishesListInBasket}
          renderHiddenItem={this.renderHiddenItem}
          rightOpenValue={OPEN_SWIPE_VALUE}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
        <View style={styles.acceptBlock}>
          <View style={styles.acceptButton}>
            <CustomButton title="Complete order" color="#F6F6F9" backgroundColor="#FA4A0C" />
          </View>
        </View>
      </View>
    ) : (
      <EmptyOrders />
    );
  }

  private keyExtractor = (item: DishModel) => `${item.id}`;

  private renderHiddenItem = (rowData: ListRenderItemInfo<DishModel>, rowMap: RowMap<DishModel>) => (
    <View style={[styles.swipeButtonsBlock]}>
      <TouchableOpacity onPress={() => this.closeRow(rowMap, rowData.item.id)} style={styles.swipeButton}>
        <HeartIcon name="heart" size={16} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.onDelete(rowMap, rowData.item)} style={styles.swipeButton}>
        <HeartIcon name="trash" size={16} color="white" />
      </TouchableOpacity>
    </View>
  );

  private renderItem = (rowData: ListRenderItemInfo<DishModel>) => (
    <View style={styles.swipeBlock} key={rowData.item.id}>
      <View style={styles.imageBlock}>
        <Image source={{uri: rowData.item.image}} style={styles.image} />
      </View>
      <View style={styles.cartInfo}>
        <Text style={styles.cartName}>{rowData.item.name}</Text>
        <View style={styles.counterBlock}>
          <Text style={styles.cartCost}>{rowData.item.cost}</Text>
          <Counter />
        </View>
      </View>
    </View>
  );

  private onDelete = (rowMap: RowMap<DishModel>, item: DishModel) => {
    this.closeRow(rowMap, item.id);

    this.props.dish.deleteFromBasket(item);
  };

  private closeRow = (rowMap: RowMap<DishModel>, rowKey: number) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };
}
