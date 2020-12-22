import React from 'react';
import {View, Image, Text, TouchableOpacity, TextInput, ScrollView, Keyboard, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerActions, RouteProp} from '@react-navigation/native';
import {inject, observer} from 'mobx-react';

import {CardOfDish} from './CardOfDish';
import {TypeFood} from './TypeFood';
import {RootScreens, RootStackParamList} from '@navigation/screens';
import {Dish as DishModel, Type as TypeModel, TypesDish} from '@models/dish';
import {Stores} from '@stores/stores';
import {FoodsStore} from '@stores/foods';

import {styles} from './styles/home';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Home>;
  route: RouteProp<RootStackParamList, RootScreens.Home>;
  dish: FoodsStore;
}
interface State {
  currentType: TypesDish;
  refresh: boolean;
}

const types = [
  {id: 1, type: TypesDish.Foods},
  {id: 2, type: TypesDish.Drinks},
  {id: 3, type: TypesDish.Snacks},
];

@inject(Stores.DishStore)
@observer
export class Home extends React.Component<Props, State> {
  public state: State = {
    currentType: TypesDish.Foods,
    refresh: false,
  };

  public async componentDidMount() {
    await this.props.dish.fetchDishes();
  }

  public render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.hangleOpenDrawer}>
            <Image source={require('../../assets/image/Vector.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.navigateOrders}>
            <Image source={require('../../assets/image/orders.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <View>
            <Text numberOfLines={2} style={styles.title}>
              Delicious food for you
            </Text>
            <View style={styles.inputBlock}>
              <Icon name="search" size={20} color="#000000" style={styles.search} />
              <TextInput placeholder="Search" style={styles.searchInput} onFocus={this.navigateSearch} />
            </View>
          </View>
        </View>

        <FlatList
          data={types}
          extraData={this.state.refresh}
          keyExtractor={this.keyExtractorType}
          renderItem={this.renderType}
          contentContainerStyle={styles.foods}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <FlatList
          data={this.props.dish.dishesList}
          extraData={this.state.refresh}
          keyExtractor={this.keyExtractorDish}
          renderItem={this.renderDish}
          contentContainerStyle={styles.dishesContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    );
  }

  private hangleOpenDrawer = () => {
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
  };

  private keyExtractorType = (item: TypeModel) => `Type - ${item.id}`;
  private keyExtractorDish = (item: DishModel) => `Dish - ${item.id}`;

  private changeType = (currentType: TypesDish) => {
    this.setState({currentType, refresh: !this.state.refresh});
  };

  private navigateDish = (dish: DishModel) => {
    this.props.navigation.navigate(RootScreens.Dish, {dish, onPress: this.addDishInBasket});
  };

  private navigateSearch = () => {
    Keyboard.dismiss();
    this.props.navigation.navigate(RootScreens.Search);
  };

  private renderType = ({item}) => (
    <TypeFood name={item.type} key={item.id} onPress={this.changeType} active={item.type === this.state.currentType} />
  );

  private addDishInBasket = (item: DishModel) => {
    this.props.dish.addInBasket(item.id);
  };

  private navigateOrders = () => {
    this.props.navigation.navigate(RootScreens.Orders);
  };

  private renderDish = ({item}: {item: DishModel}) =>
    this.state.currentType === item.type ? <CardOfDish onPress={this.navigateDish} dish={item} /> : null;
}
