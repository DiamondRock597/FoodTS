import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, Image, TouchableOpacity, ListRenderItem, ListRenderItemInfo} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {RootScreens, RootStackParamList} from '../../navigation/screens';
import {Dish} from '../../models/dish';

import {styles} from './styles/search';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Search>;
  route: RouteProp<RootStackParamList, RootScreens.Search>;
}

interface State {
  valueInput: string;
}

export class Search extends React.Component<Props, State> {
  public state: State = {
    valueInput: '',
  };

  public componentDidMount() {}
  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={this.props.navigation.goBack}>
            <Icon name="arrow-back-ios" size={24} color="#000000" />
          </TouchableOpacity>

          <TextInput onChangeText={this.onChangeInput} value={this.state.valueInput} style={styles.input} placeholder="Search" autoFocus />
        </View>
        <View style={styles.contentBlock}>
          <FlatList
            contentContainerStyle={styles.contentContainer}
            keyExtractor={this.keyExtractor}
            showsVerticalScrollIndicator={false}
            data={this.props.route.params.dishes}
            renderItem={this.renderItem}
            numColumns={2}
          />
        </View>
      </View>
    );
  }
  private onChangeInput: (valueInput: string) => void = (valueInput) => {
    this.setState({valueInput});
  };

  private keyExtractor: (item: Dish) => string = (item) => `Dish - ${item.id}`;

  private navigateDish: (dish: Dish) => void = (dish) => this.props.navigation.navigate(RootScreens.Dish, {dish});

  private renderItem = ({item, index}: ListRenderItemInfo<Dish>) =>
    item.name.toLowerCase().includes(this.state.valueInput.toLowerCase()) ? (
      <View style={[styles.dishesItem, (index + 1) % 2 === 0 && {marginTop: 120}]}>
        <Text numberOfLines={2} style={styles.dishesTitle}>
          {item.name}
        </Text>

        <Text style={styles.dishesCost}>N{item.cost}</Text>
        <View style={styles.dishesCircle}>
          <Image source={{uri: item.image}} style={styles.image} />
        </View>
      </View>
    ) : null;
}
