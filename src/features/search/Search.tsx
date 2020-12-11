import React, {Component} from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, Image, TouchableOpacity, Animated} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {RootScreens, RootStackParamList} from '@navigation/screens';
import {Dish} from '@models/dish';

import {styles} from './styles/search';
import {Extrapolate} from 'react-native-reanimated';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Search>;
  route: RouteProp<RootStackParamList, RootScreens.Search>;
}

interface State {
  valueInput: string;
  scrollY: Animated.Value;
}

export class Search extends Component<Props, State> {
  public state: State = {
    valueInput: '',
    scrollY: new Animated.Value(0),
  };

  public get dishes() {
    return this.props.route.params.dishes.filter((dish) => dish.name.toLowerCase().includes(this.state.valueInput.toLowerCase()));
  }

  public get ListHeaderComponent() {
    const height = this.state.scrollY.interpolate({
      inputRange: [0, 130],
      outputRange: [130, 0],
      extrapolate: Extrapolate.CLAMP,
    });
    const opacity = this.state.scrollY.interpolate({
      inputRange: [0, 130],
      outputRange: [1, 0],
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

  public componentDidMount() {}
  public render() {
    return (
      <View style={styles.container}>
        <Animated.FlatList
          scrollEventThrottle={16}
          keyExtractor={this.keyExtractor}
          showsVerticalScrollIndicator={false}
          style={{paddingVertical: 130}}
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

  private keyExtractor: (item: Dish) => string = (item) => `Dish - ${item.id}`;

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
