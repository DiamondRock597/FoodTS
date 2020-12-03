import React from 'react';
import {View, Image, Text, TouchableOpacity, TextInput, ScrollView, ImageProps, ListRenderItemInfo} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {CardOfDish} from './CardOfDish';
import {TypeFood} from './TypeFood';
import {RootScreens, RootStackParamList} from '../../navigation/screens';

import typesDish from './types.json';

import {styles} from './styles/home';
import {Dish} from '../../models/dish';
import {FlatList} from 'react-native-gesture-handler';

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
              <Icon name="search" size={20} color="#000000" style={styles.search} />
              <TextInput placeholder="Search" style={styles.searchInput} />
            </View>
          </View>
        </View>

        <FlatList
          data={typesDish}
          keyExtractor={this.keyExtractorType}
          renderItem={this.renderType}
          contentContainerStyle={styles.foods}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <FlatList
          data={typesDish[this.state.currentIndex].dishes}
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

  private changeIndex: (currentIndex: number) => void = (currentIndex) => {
    this.setState({currentIndex});
  };

  private navigateDish: (dish: Dish) => void = (dish) => {
    this.props.navigation.navigate(RootScreens.Dish, {dish});
  };

  private renderType = ({item}) => (
    <TypeFood name={item.type} key={item.id} id={item.id} onPress={this.changeIndex} active={item.id === this.state.currentIndex} />
  );

  private renderDish = ({item}: {item: Dish}) => <CardOfDish onPress={this.navigateDish} dish={item} />;
}
