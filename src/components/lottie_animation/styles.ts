import {StyleSheet, Dimensions, ScaledSize} from 'react-native';

const {width, height}: ScaledSize = Dimensions.get('screen');

export const styles = StyleSheet.create({
  blockAnimation: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  lottieAnimation: {
    width,
    height,
  },
});
