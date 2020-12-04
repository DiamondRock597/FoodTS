import React from 'react';
import {View, Image, Text, TouchableOpacity, TextInput, ScrollView, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {CardOfDish} from './CardOfDish';
import {TypeFood} from './TypeFood';
import {RootScreens, RootStackParamList} from '../../navigation/screens';

import dishes from './dishes.json';

import {styles} from './styles/home';
import {Dish, TypesDish} from '../../models/dish';
import {FlatList} from 'react-native-gesture-handler';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Home>;
  route: RouteProp<RootStackParamList, RootScreens.Home>;
}

interface State {
  currentType: TypesDish;
}

const types = [
  {id: 1, type: TypesDish.Foods},
  {id: 2, type: TypesDish.Drinks},
  {id: 3, type: TypesDish.Snacks},
];

export class Home extends React.Component<Props, State> {
  public state: State = {
    currentType: TypesDish.Foods,
  };

  public render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require('../../assets/image/Vector.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
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
          keyExtractor={this.keyExtractorType}
          renderItem={this.renderType}
          contentContainerStyle={styles.foods}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <FlatList
          data={dishes}
          keyExtractor={this.keyExtractorDish}
          renderItem={this.renderDish}
          contentContainerStyle={styles.dishesContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    );
  }

  private keyExtractorType: (item) => string = (item) => `Type - ${item.id}`;
  private keyExtractorDish: (item) => string = (item) => `Dish - ${item.id}`;

  private changeType: (currentType: TypesDish) => void = (currentType) => {
    this.setState({currentType});
  };

  private navigateDish: (dish: Dish) => void = (dish) => {
    this.props.navigation.navigate(RootScreens.Dish, {dish});
  };

  private navigateSearch: () => void = () => {
    Keyboard.dismiss();
    this.props.navigation.navigate(RootScreens.Search, {dishes});
  };

  private renderType = ({item}) => (
    <TypeFood name={item.type} key={item.id} onPress={this.changeType} active={item.type === this.state.currentType} />
  );

  private renderDish = ({item}: {item: Dish}) =>
    this.state.currentType === item.type ? <CardOfDish onPress={this.navigateDish} dish={item} /> : null;
}
