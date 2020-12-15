import {StyleSheet, Dimensions, ScaledSize} from 'react-native';

const {height}: ScaledSize = Dimensions.get('window');

const ratioForContainer = 0.48;

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingTop: 15,
    height: height * ratioForContainer,
    flexDirection: 'column',
  },
});
