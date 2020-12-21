import React from 'react';
import {inject, observer} from 'mobx-react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {FoodsStore} from 'stores/foods';
import {Stores} from 'stores/stores';

import {styles} from './styles/counter';

interface Props {
  id: number;
  dish: FoodsStore;
}

@inject(Stores.DishStore)
@observer
export class Counter extends React.Component<Props> {
  private get capacity() {
    return this.props.dish.dishesList.find((elem) => elem.id === this.props.id)?.capacity;
  }

  public render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onMinus} style={styles.counterButton}>
          <Text style={styles.counterText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.counterText}>{this.capacity}</Text>
        <TouchableOpacity onPress={this.onPlus} style={styles.counterButton}>
          <Text style={styles.counterText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }

  public onPlus = () => this.props.dish.addDish(this.props.id);
  public onMinus = () => this.props.dish.deleteDish(this.props.id);
}
