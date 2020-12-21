import {Dimensions, ScaledSize, StyleSheet} from 'react-native';

const {height}: ScaledSize = Dimensions.get('window');

const ratioPaddingContainer = 0.02;

export const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    elevation: 1,
    paddingVertical: height * ratioPaddingContainer,
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontFamily: 'FontsFree-Net-SFProText-Medium-1',
  },
});
