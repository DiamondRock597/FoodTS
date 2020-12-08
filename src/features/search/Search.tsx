import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, Image, TouchableOpacity} from 'react-native';
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

  public get ListHeaderComponent() {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={this.props.navigation.goBack}>
          <Icon name="arrow-back-ios" size={24} color="#000000" />
        </TouchableOpacity>

        <TextInput onChangeText={this.onChangeInput} value={this.state.valueInput} style={styles.input} placeholder="Search" autoFocus />
      </View>
    );
  }

  public get dishes() {
    return this.props.route.params.dishes.filter((dish) => dish.name.toLowerCase().includes(this.state.valueInput.toLowerCase()));
  }

  public componentDidMount() {}
  public render() {
    return (
      <View>
        <FlatList
          columnWrapperStyle={{
            paddingTop: 30,
            backgroundColor: 'blue',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            paddingHorizontal: 24,
          }}
          ListHeaderComponent={this.ListHeaderComponent}
          keyExtractor={this.keyExtractor}
          showsVerticalScrollIndicator={false}
          data={this.dishes}
          renderItem={this.renderItem}
          numColumns={2}
        />
      </View>
    );
  }
  private onChangeInput: (valueInput: string) => void = (valueInput) => {
    this.setState({valueInput});
  };

  private keyExtractor: (item: Dish) => string = (item) => `Dish - ${item.id}`;

  private navigateDish: (dish: Dish) => void = (dish) => this.props.navigation.navigate(RootScreens.Dish, {dish});

  private renderItem = ({item}: {item: Dish}) => (
    <View style={styles.dishesItem}>
      <Text numberOfLines={2} style={styles.dishesTitle}>
        {item.name}
      </Text>
      {console.log({item})}
      <Text style={styles.dishesCost}>N{item.cost}</Text>
      <View style={styles.dishesCircle}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
    </View>
  );
}
