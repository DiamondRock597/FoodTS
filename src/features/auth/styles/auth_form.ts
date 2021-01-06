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
  title: {
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 15,
    lineHeight: 18,
    opacity: 0.4,
  },
  inputBlock: {
    paddingVertical: 20,
    width: width - paddingInputBlock,
  },
  input: {
    height: 41,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 15,
    lineHeight: 12,
    color: 'black',
  },
  forgotpassword: {
    paddingBottom: 20,
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 17,
    lineHeight: 20,
    color: '#FA4A0C',
  },
  errorMessage: {
    fontFamily: 'FontsFree-Net-SFProText-Light',
    fontSize: 12,
    color: 'red',
  },
});
