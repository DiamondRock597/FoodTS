import React from 'react';
import {inject, observer} from 'mobx-react';
import {View, Text, Image} from 'react-native';

import {Stores} from '@stores/stores';
import {FoodsStore} from '@stores/foods';

import {styles} from './styles/favourites';
import {FlatList} from 'react-native-gesture-handler';
import {Dish} from '@models/dish';

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
  public render() {
    return (
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={this.ListHeaderComponent}
          keyExtractor={this.keyExtractor}
          contentContainerStyle={styles.contentContainer}
          numColumns={2}
          data={this.props.dish.favouritesDishes}
          renderItem={this.renderItem}
          columnWrapperStyle={styles.columnFlatList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  private renderItem = ({item}: {item: Dish}) => (
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

  private keyExtractor = (item: Dish) => `FavouriteDish - ${item.id} `;
}
