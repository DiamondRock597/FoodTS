import React from 'react';
import {inject, observer} from 'mobx-react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {FoodsStore} from 'stores/foods';
import {Stores} from 'stores/stores';
import {CounterButton} from './CounterButton';

import {styles} from './styles/counter';

enum ActionsCounter {
  Plus = '+',
  Minus = '-',
}

interface Props {
  id: number;
  dish?: FoodsStore;
}

@inject(Stores.DishStore)
@observer
export class Counter extends React.Component<Props> {
  private get quantity() {
    return this.props.dish!.dishesList.find((elem) => elem.id === this.props.id)?.quantity;
  }

  public render() {
    return (
      <View style={styles.container}>
        <CounterButton onPress={this.onMinus} title={ActionsCounter.Minus} />
        <Text style={styles.counterText}>{this.quantity}</Text>
        <CounterButton onPress={this.onPlus} title={ActionsCounter.Plus} />
      </View>
    );
  }

  public onPlus = () => this.props.dish!.addInBasket(this.props.id);
  public onMinus = () => this.props.dish!.deleteFromBasket(this.props.id);
}
