import {StyleSheet, Dimensions, ScaledSize} from 'react-native';

const {height}: ScaledSize = Dimensions.get('window');

const ratioPaddingVertical = 0.02;

export const styles = StyleSheet.create({
  methodBlock: {
    paddingHorizontal: 15,
    paddingVertical: height * ratioPaddingVertical,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  radioButton: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: '#FA4A0C',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#FA4A0C',
  },
  titleBlock: {
    paddingHorizontal: 15,
  },
  imageBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 40,
    height: 40,
  },
  titleMethod: {
    fontSize: 17,
    color: '#000000',
    lineHeight: 21,
  },
});
