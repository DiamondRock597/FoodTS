import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {styles} from './styles/counter';

export const Counter = () => {
  const [number, setNumber] = useState<number>(1);

  const onPlus = () => {
    const newNumber = number - 1;
    setNumber(newNumber);
  };

  const onMinus = () => {
    const newNumber = number + 1;
    setNumber(newNumber);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPlus} style={styles.counterButton}>
        <Text style={styles.counterText}>-</Text>
      </TouchableOpacity>

      <Text style={styles.counterText}>{number}</Text>

      <TouchableOpacity onPress={onMinus} style={styles.counterButton}>
        <Text style={styles.counterText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
