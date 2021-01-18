import React from 'react';
import {View, Text, Image, ListRenderItemInfo, NativeModules} from 'react-native';
import SwipeIconHeader from 'react-native-vector-icons/MaterialIcons';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootScreens, RootStackParamList} from 'navigation/screens';
import {RouteProp} from '@react-navigation/native';
import SwipeableItem, {OverlayParams, UnderlayParams} from 'react-native-swipeable-item';
import Animated from 'react-native-reanimated';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {inject, observer} from 'mobx-react';

import {EmptyOrders} from './EmptyOrders';
import {Counter} from './Counter';
import {SwipeIcon} from './SwipeIcon';
import {CustomButton} from '@components/custom_button';
import {FoodsStore} from '@stores/foods';
import {Stores} from '@stores/stores';
import {Dish as DishModel} from '@models/dish';

import {styles} from './styles/orders';

const {MyToast} = NativeModules;

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Orders>;
  route: RouteProp<RootStackParamList, RootScreens.Orders>;
  dish: FoodsStore;
}

const OPEN_SWIPE_VALUE = 125;

@inject(Stores.DishStore)
@observer
export class Orders extends React.Component<Props> {
  private get ListHeaderComponent() {
    return (
      <>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.props.navigation.goBack}>
            <SwipeIconHeader name="arrow-back-ios" size={22} color="#000000" />
          </TouchableOpacity>
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
    return this.props.dish.dishesListInBasket.length ? (
      <View style={styles.container}>
        <FlatList
          data={this.props.dish.dishesListInBasket}
          ListHeaderComponent={this.ListHeaderComponent}
          renderItem={this.renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          keyExtractor={this.keyExtractor}
        />
        <View style={styles.acceptBlock}>
          <CustomButton title="Complete order" onPress={this.onCompleteOrder} color="#F6F6F9" backgroundColor="#FA4A0C" />
        </View>
      </View>
    ) : (
      <EmptyOrders navigation={this.props.navigation} />
    );
  }

  private keyExtractor = (item: DishModel) => `SwipeDish - ${item.id}`;

  private renderHiddenItem = (swipeItem: UnderlayParams<DishModel>) => (
    <Animated.View style={[styles.row, {opacity: swipeItem.percentOpen}]}>
      <View style={styles.swipeButtonsBlock}>
        <SwipeIcon
          id={swipeItem.item.id}
          name="heart"
          onPress={() => this.onAdd(swipeItem)}
          close={swipeItem.close}
          percentOpen={swipeItem.percentOpen}
        />
        <SwipeIcon
          id={swipeItem.item.id}
          name="trash"
          onPress={() => this.onDelete(swipeItem)}
          close={swipeItem.close}
          percentOpen={swipeItem.percentOpen}
        />
      </View>
    </Animated.View>
  );

  private renderItem = ({item}: ListRenderItemInfo<DishModel>) => (
    <View style={styles.flatRow}>
      <SwipeableItem
        snapPointsLeft={[OPEN_SWIPE_VALUE]}
        renderUnderlayLeft={this.renderHiddenItem}
        renderOverlay={this.renderOverlayItem}
        key={this.keyExtractor(item)}
        item={item}
        overSwipe={0}
        swipeDamping={20}
      />
    </View>
  );

  private renderOverlayItem = ({item}: OverlayParams<DishModel>) => (
    <View style={styles.swipeBlock} key={item.id}>
      <View style={styles.imageBlock}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
      <View style={styles.cartInfo}>
        <Text style={styles.cartName}>{item.name}</Text>
        <View style={styles.counterBlock}>
          <Text style={styles.cartCost}>{item.cost}</Text>
          <Counter id={item.id} />
        </View>
      </View>
    </View>
  );

  private onDelete = async ({item, close}: {item: DishModel; close: () => Promise<void>}) => {
    await close();
    this.props.dish.deleteFromBasket(item.id);
  };

  private onAdd = async ({item, close}: {item: DishModel; close: () => Promise<void>}) => {
    await close();
    this.props.dish.changeFavourite(item.id);
  };

  private onCompleteOrder = () => {
    MyToast.onCompletedOrders();
  };
}
