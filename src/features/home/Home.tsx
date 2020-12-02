import React from 'react';
import {View, Image, Text, TouchableOpacity, TextInput, ScrollView, ImageProps} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {CardOfDish} from './CardOfDish';
import {TypeFood} from './TypeFood';
import {RootScreens, RootStackParamList} from '../../navigation/screens';
import imageFood from '../../assets/image/food.png';
import imageFood2 from '../../assets/image/food2.png';
import imageFood3 from '../../assets/image/food3.png';

import {styles} from './styles/home';
import {Dish} from '../../models/dish';
import {FlatList} from 'react-native-gesture-handler';

const typeDish = [
  {
    id: 0,
    type: 'Foods',
    dishes: [
      {id: 3, name: 'Veggie tomato mix', image: imageFood, cost: 500},
      {id: 4, name: 'Egg and cucmber...', image: imageFood2, cost: 200},
      {id: 5, name: 'Fried chicken m.', image: imageFood3, cost: 300},
    ],
  },
  {
    id: 1,
    type: 'Drinks',
    dishes: [
      {id: 6, name: 'Fried chicken m.', image: imageFood3, cost: 100},
      {id: 7, name: 'Veggie tomato mix', image: imageFood, cost: 400},
      {id: 8, name: 'Egg and cucmber...', image: imageFood2, cost: 700},
    ],
  },
  {
    id: 2,
    type: 'Snacks',
    dishes: [
      {id: 9, name: 'Fried chicken m.', image: imageFood3, cost: 200},
      {id: 10, name: 'Egg and cucmber...', image: imageFood2, cost: 800},
      {id: 11, name: 'Veggie tomato mix', image: imageFood, cost: 900},
    ],
  },
  {
    id: 3,
    type: 'Sauce',
    dishes: [
      {id: 9, name: 'Fried chicken m.', image: imageFood3, cost: 200},
      {id: 10, name: 'Egg and cucmber...', image: imageFood2, cost: 800},
      {id: 11, name: 'Veggie tomato mix', image: imageFood, cost: 900},
    ],
  },
];

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Home>;
  route: RouteProp<RootStackParamList, RootScreens.Home>;
}

interface State {
  currentIndex: number;
}

export class Home extends React.Component<Props, State> {
  public state: State = {
    currentIndex: 0,
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
              <Icon name={'search'} size={20} color="#000000" style={styles.search} />
              <TextInput placeholder="Search" style={styles.searchInput} />
            </View>
          </View>
        </View>

        <FlatList
          data={typeDish}
          keyExtractor={}
          renderItem={this.renderType}
          contentContainerStyle={styles.foods}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <ScrollView horizontal contentContainerStyle={styles.dishesContainer} showsHorizontalScrollIndicator={false}>
          {typeDish[this.state.currentIndex].dishes.map((dish) => (
            <CardOfDish onPress={this.navigateDish} key={dish.id} dish={dish} />
          ))}
        </ScrollView>
      </ScrollView>
    );
  }

  private changeIndex: (currentIndex: number) => void = (currentIndex) => {
    this.setState({currentIndex});
  };

  private navigateDish: (dish: Dish) => void = (dish) => {
    this.props.navigation.navigate(RootScreens.Dish, {dish});
  };

  private renderType = ({item}) => (
    <TypeFood name={item.type} key={item.id} id={item.id} onPress={this.changeIndex} active={item.id === this.state.currentIndex} />
  );
}
