import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {width}: ScaledSize = Dimensions.get('window');

const paddingInputBlock = 100;

export const styles = StyleSheet.create({
  form: {
    width,
  },
  contentContainer: {
    alignItems: 'center',
  },
  forgotPassword: {
    paddingVertical: 20,
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 17,
    lineHeight: 20,
    color: '#FA4A0C',
  },
  submitBlock: {
    paddingVertical: 20,
    width: width - paddingInputBlock,
  },
});
