import React from 'react';
import {inject, observer} from 'mobx-react';
import {View, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {Stores} from '@stores/stores';
import {FoodsStore} from '@stores/foods';
import {DishCard} from '@models/dish_card';

import {styles} from './styles/favourites';

interface Props {
  dish: FoodsStore;
}

@inject(Stores.DishStore)
@observer
export class Favourites extends React.Component<Props> {
  private get ListHeaderComponent() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favourites</Text>
      </View>
    );
  }

  private get ListEmptyComponent() {
    return (
      <View>
        <Text>Please add your favourite dishes</Text>
      </View>
    );
  }
  public render() {
    return (
      <FlatList
        ListHeaderComponent={this.ListHeaderComponent}
        ListEmptyComponent={this.ListEmptyComponent}
        keyExtractor={this.keyExtractor}
        contentContainerStyle={styles.contentContainer}
        numColumns={2}
        data={this.props.dish.favouritesDishes}
        renderItem={this.renderItem}
        columnWrapperStyle={styles.columnFlatList}
        showsVerticalScrollIndicator={false}
      />
    );
  }

  private renderItem = ({item}: {item: DishCard}) => (
    <View style={[styles.dishesItem]}>
      <Text numberOfLines={2} style={styles.dishesTitle}>
        {item.name}
      </Text>
      <Text style={styles.dishesCost}>N{item.cost}</Text>
      <View style={styles.dishesCircle}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
    </View>
  );

  private keyExtractor = (item: DishCard) => `FavouriteDish - ${item.id} `;
}
