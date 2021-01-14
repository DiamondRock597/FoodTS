import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {width}: ScaledSize = Dimensions.get('window');

const paddingInputBlock = 100;

export const styles = StyleSheet.create({
  inputBlock: {
    paddingTop: 15,
    paddingBottom: 15,
    width: width - paddingInputBlock,
  },

  errorMessage: {
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 14,
    lineHeight: 15,
    color: 'red',
    paddingTop: 5,
  },
  input: {
    height: 41,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 17,
    lineHeight: 20,
    color: 'black',
  },
  title: {
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 15,
    lineHeight: 18,
    opacity: 0.4,
  },
});
