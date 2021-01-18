import React, {Component} from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, Image, TouchableOpacity, Animated} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Extrapolate} from 'react-native-reanimated';
import {inject, observer} from 'mobx-react';

import {Stores} from '@stores/stores';
import {RootScreens, RootStackParamList} from '@navigation/screens';
import {DishCard} from '@models/dish_card';
import {FoodsStore} from '@stores/foods';

import {HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT, HEADER_SCROLL_DISTANCE, styles} from './styles/search';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Search>;
  route: RouteProp<RootStackParamList, RootScreens.Search>;
  dish: FoodsStore;
}

interface State {
  valueInput: string;
  scrollY: Animated.Value;
}

const marginForOddIndex = 60;
const marginForEvenIndex = 160;
const startPositionValue = 0;
const startOpacity = 1;
const half = 2;

@inject(Stores.DishStore)
@observer
export class Search extends Component<Props, State> {
  public state: State = {
    valueInput: '',
    scrollY: new Animated.Value(startPositionValue),
  };

  public get dishes() {
    return this.props.dish.dishesList.filter((dish) => dish.name.toLowerCase().includes(this.state.valueInput.toLowerCase()));
  }

  public get ListEmptyComponent() {
    return (
      <View style={styles.listEmptyComponent}>
        <Text>Such cards are not</Text>
      </View>
    );
  }
  public get ListHeaderComponent() {
    const height = this.state.scrollY.interpolate({
      inputRange: [startPositionValue, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: Extrapolate.CLAMP,
    });
    const opacity = this.state.scrollY.interpolate({
      inputRange: [startPositionValue, HEADER_SCROLL_DISTANCE / half, HEADER_SCROLL_DISTANCE],
      outputRange: [startOpacity, startOpacity, startPositionValue],
      extrapolate: Extrapolate.CLAMP,
    });
    return (
      <Animated.View style={[styles.header, {height, opacity}]}>
        <TouchableOpacity onPress={this.props.navigation.goBack}>
          <Icon name="arrow-back-ios" size={24} color="#000000" />
        </TouchableOpacity>
        <TextInput onChangeText={this.onChangeInput} value={this.state.valueInput} style={styles.input} placeholder="Search" autoFocus />
      </Animated.View>
    );
  }

  public render() {
    return (
      <View style={styles.container}>
        <Animated.FlatList
          ListEmptyComponent={this.ListEmptyComponent}
          scrollEventThrottle={16}
          keyExtractor={this.keyExtractor}
          showsVerticalScrollIndicator={false}
          style={styles.paddingList}
          data={this.dishes}
          renderItem={this.renderItem}
          columnWrapperStyle={styles.columnFlatList}
          numColumns={2}
          contentContainerStyle={styles.contentContainer}
          onScroll={Animated.event([{nativeEvent: {contentOffset: {y: this.state.scrollY}}}])}
        />
        {this.ListHeaderComponent}
      </View>
    );
  }
  private onChangeInput: (valueInput: string) => void = (valueInput) => {
    this.setState({valueInput});
  };

  private keyExtractor: (item: DishCard) => string = (item) => `Dish - ${item.id}`;

  private renderItem = ({item}: {item: DishCard}) => (
    <View style={[styles.dishesItem, {marginTop: item.id % half === 0 ? marginForEvenIndex : marginForOddIndex}]}>
      <Text numberOfLines={2} style={styles.dishesTitle}>
        {item.name}
      </Text>
      <Text style={styles.dishesCost}>N{item.cost}</Text>
      <View style={styles.dishesCircle}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
    </View>
  );
}
