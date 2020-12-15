import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {width}: ScaledSize = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width,
    backgroundColor: '#FA4A0C',
  },
});
