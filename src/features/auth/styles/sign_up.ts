import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {width}: ScaledSize = Dimensions.get('window');
const paddingHorizontalInputBlock = 100;

export const styles = StyleSheet.create({
  form: {
    width,
  },
  inputBlock: {
    paddingVertical: 20,
    width: width - paddingHorizontalInputBlock,
  },
  contentContainer: {
    alignItems: 'center',
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
